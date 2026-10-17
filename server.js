// ============================================================
//  LUXE ESTATE — BACKEND SERVER
// ============================================================

import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ============================================================
//  MIDDLEWARE
// ============================================================
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

// ✅ CORS FIXED FOR LIVE
const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://www.thakarshilifespaces.com",  // ✅ Live domain (www)
  "https://thakarshilifespaces.com",      // ✅ Live domain (bina www)
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Agar request origin nahi hai (jaise Postman) toh allow karo
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

// ✅ Handle OPTIONS preflight requests
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

// Test connection on startup
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("✅ MySQL connected successfully");
    console.log(`   Host: ${process.env.DB_HOST}`);
    console.log(`   DB:   ${process.env.DB_NAME}`);
    connection.release();
  } catch (err) {
    console.error("❌ MySQL connection failed:", err.message);
  }
})();

// ============================================================
//  HEALTH
// ============================================================
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Server running" });
});

// ============================================================
//  TESTIMONIALS — GET /api/testimonials
// ============================================================
app.get("/api/testimonials", async (req, res) => {
  try {
    const [cols] = await pool.query(
      `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
       WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'thakarshi_reviews'`,
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
    const orderBy = columnNames.includes("sort_order")
      ? "sort_order ASC, created_at DESC"
      : "created_at DESC";

    const sql = `
      SELECT ${parts.join(", ")}
      FROM thakarshi_reviews
      ${whereClause}
      ORDER BY ${orderBy}
    `;

    const [rows] = await pool.query(sql);

    res.json({ success: true, count: rows.length, data: rows });
  } catch (err) {
    console.error("❌ Testimonials error:", err.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch testimonials",
      debug: err.message,
    });
  }
});

// ============================================================
//  REVIEWS — POST /api/reviews
// ============================================================
app.post("/api/reviews", async (req, res) => {
  try {
    const { name, project, quote, rating } = req.body;

    const errors = [];
    if (!name || name.trim().length < 2) errors.push("Name is required");
    if (!project || project.trim().length < 2) errors.push("Project is required");
    if (!quote || quote.trim().length < 10) errors.push("Review must be at least 10 characters");

    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    const [result] = await pool.execute(
      `INSERT INTO thakarshi_reviews (name, role, review, rating)
       VALUES (?, ?, ?, ?)`,
      [name.trim(), project.trim(), quote.trim(), rating || 5]
    );

    console.log(`⭐ New review #${result.insertId} — ${name}`);

    res.status(201).json({
      success: true,
      message: "Review submitted successfully",
      id: result.insertId,
    });
  } catch (err) {
    console.error("❌ Review error:", err.message);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again.",
      debug: err.message,
    });
  }
});

// ============================================================
//  ENQUIRIES — POST /api/enquiries
//  Used by: JMH, Palm, Paradise, Elite modals
// ============================================================
app.post("/api/enquiries", async (req, res) => {
  try {
    const { name, mobile, email, config, message, source } = req.body;

    const errors = [];
    if (!name || name.trim().length < 2) errors.push("Name is required");
    if (!mobile || !/^[0-9+\-\s]{7,15}$/.test(mobile.trim())) {
      errors.push("Valid mobile number is required");
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("Invalid email format");
    }

    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    const [result] = await pool.execute(
      `INSERT INTO thakarshi_enquiries
        (name, mobile, email, config, message, source)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        name.trim(),
        mobile.trim(),
        email?.trim().toLowerCase() || null,
        config?.trim() || null,
        message?.trim() || null,
        source?.trim() || "website",
      ]
    );

    console.log(`📥 New enquiry #${result.insertId} — ${name} [${source || "website"}]`);

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      id: result.insertId,
    });
  } catch (err) {
    console.error("❌ Enquiry error:", err.message);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again.",
      debug: err.message,
    });
  }
});

// ============================================================
//  CONTACTS — POST /api/contacts
//  Contact page form → thakarshi_enquiries table
// ============================================================
app.post("/api/contacts", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const errors = [];
    if (!name || name.trim().length < 2) errors.push("Name is required");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("Valid email is required");
    }
    if (!phone || !/^[0-9+\-\s]{7,15}$/.test(phone)) {
      errors.push("Valid phone number is required");
    }
    if (!message || message.trim().length < 2) {
      errors.push("Message is required");
    }

    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    const [result] = await pool.execute(
      `INSERT INTO thakarshi_enquiries
        (name, mobile, email, config, message, source)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        name.trim(),
        phone.trim(),
        email.trim().toLowerCase(),
        subject?.trim() || "General Enquiry",
        message.trim(),
        "contact-page",
      ]
    );

    console.log(`📩 New contact #${result.insertId} — ${name} (${email})`);

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      id: result.insertId,
    });
  } catch (err) {
    console.error("❌ Contact error:", err.message);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again.",
      debug: err.message,
    });
  }
});

// ============================================================
//  ADMIN — GET /api/enquiries (list all)
// ============================================================
app.get("/api/enquiries", async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT * FROM thakarshi_enquiries ORDER BY created_at DESC LIMIT 100`
    );
    res.json({ success: true, count: rows.length, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ============================================================
//  START
// ============================================================
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}\n`);
});