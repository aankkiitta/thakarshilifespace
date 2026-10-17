import { Link } from "react-router-dom";
import "./Button.css";

/**
 * Shared CTA button.
 * variant: "solid" | "outline" | "ghost"
 * dark: boolean — dark background ke liye
 */
export default function Button({
  to,
  href,
  onClick,
  variant = "solid",
  dark = false,
  children,
  className = "",
  type = "button",
}) {
  const classes = [
    "btn",
    `btn--${variant}`,
    dark ? "btn--dark" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}