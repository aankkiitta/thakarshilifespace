// ============================================================
//  LUXE ESTATE — BACKEND + FRONTEND ENTRY FILE (index.js)
// ============================================================

import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";    // ✅ Added for Frontend path
import fs from "fs";        // ✅ Added for File System
import { fileURLToPath } from 'url'; // ✅ Added for __dirname in ES Modules

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ __dirname setup for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ CORS FIXED (Only Live Domains)
const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://www.thakarshilifespaces.com",
  "https://thakarshilifespaces.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        console.log("❌ Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
app.options("*", cors());

// ============================================================
//  MYSQL POOL
// ============================================================
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: "utf8mb4",
  timezone: "+05:30",
});

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("✅ MySQL connected successfully");
    connection.release();
  } catch (err) {
    console.error("❌ MySQL connection failed:", err.message);
  }
})();

// ============================================================
//  API ROUTES
// ============================================================

// 1. Health
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Server running" });
});

// 2. GET Testimonials
app.get("/api/testimonials", async (req, res) => {
  try {
    const [cols] = await pool.query(
      `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'thakarshi_reviews'`,
      [process.env.DB_NAME]
    );
    const columnNames = cols.map((c) => c.COLUMN_NAME);

    const parts = ["id", "name"];
    parts.push(columnNames.includes("role") ? "role AS project" : "NULL AS project");
    parts.push(columnNames.includes("review") ? "review AS quote" : "NULL AS quote");
    parts.push(columnNames.includes("rating") ? "rating" : "5 AS rating");
    parts.push(columnNames.includes("photo") ? "photo AS image" : "NULL AS image");
    parts.push(columnNames.includes("created_at") ? "created_at" : "NOW() AS created_at");

    const whereClause = columnNames.includes("is_active") ? "WHERE is_active = 1" : "";
    const orderBy = columnNames.includes("sort_order") ? "sort_order ASC, created_at DESC" : "created_at DESC";

    const sql = `SELECT ${parts.join(", ")} FROM thakarshi_reviews ${whereClause} ORDER BY ${orderBy}`;
    const [rows] = await pool.query(sql);

    res.json({ success: true, count: rows.length, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 3. POST Reviews
app.post("/api/reviews", async (req, res) => {
  try {
    const { name, project, quote, rating } = req.body;
    if (!name || !project || !quote) return res.status(400).json({ success: false, errors: ["Missing fields"] });

    const [result] = await pool.execute(
      `INSERT INTO thakarshi_reviews (name, role, review, rating) VALUES (?, ?, ?, ?)`,
      [name.trim(), project.trim(), quote.trim(), rating || 5]
    );
    res.status(201).json({ success: true, id: result.insertId });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 4. POST Enquiries
app.post("/api/enquiries", async (req, res) => {
  try {
    const { name, mobile, email, config, message, source } = req.body;
    const [result] = await pool.execute(
      `INSERT INTO thakarshi_enquiries (name, mobile, email, config, message, source) VALUES (?, ?, ?, ?, ?, ?)`,
      [name, mobile, email || null, config || null, message || null, source || "website"]
    );
    res.status(201).json({ success: true, id: result.insertId });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 5. POST Contacts
app.post("/api/contacts", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    const [result] = await pool.execute(
      `INSERT INTO thakarshi_enquiries (name, mobile, email, config, message, source) VALUES (?, ?, ?, ?, ?, ?)`,
      [name, phone, email, subject || "General Enquiry", message, "contact-page"]
    );
    res.status(201).json({ success: true, id: result.insertId });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ============================================================
//  ✅ FRONTEND SERVING (React Build)
// ============================================================

// Frontend ka path (jahan 'dist' folder hoga)
const frontendPath = path.join(__dirname, "dist"); 

// Static files (CSS, JS, Images)
app.use(express.static(frontendPath));

// React Router ke routes handle karne ke liye (Catch-all)
app.get('*', (req, res) => {
  // Agar koi /api route pe nahi aaya, toh index.html bhej do
  if (req.originalUrl.startsWith('/api')) {
    return res.status(404).json({ message: "API route not found" });
  }

  const indexPath = path.join(frontendPath, 'index.html');

  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Frontend not built. Please run "npm run build" and place the dist folder here.');
  }
});

// ============================================================
//  START
// ============================================================
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on port ${PORT}`);
  console.log(`🌍 Frontend loading from: ${frontendPath}\n`);
});