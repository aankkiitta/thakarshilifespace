import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import "./ProjectFilter.css";

const TYPE_FILTERS = [
  "All",
  "Residential",
  "Commercial",
  "Luxury",
  "Ready to Move",
  "Upcoming",
];

export default function ProjectFilter({ activeType, setActiveType }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (filter) => {
    setActiveType(filter);
    setIsOpen(false);
  };

  return (
    <div className="project-filter">

      {/* ============================================================
          DESKTOP — Pill buttons row
          ============================================================ */}
      <div className="project-filter__list project-filter__list--desktop">
        {TYPE_FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveType(filter)}
            className={`project-filter__btn ${
              activeType === filter ? "is-active" : ""
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* ============================================================
          MOBILE — Dropdown
          ============================================================ */}
      <div className="project-filter__dropdown" ref={dropdownRef}>
        <button
          type="button"
          className="project-filter__dropdown-trigger"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span>{activeType}</span>
          <ChevronDown
            size={18}
            strokeWidth={2}
            className={`project-filter__chevron ${isOpen ? "is-open" : ""}`}
          />
        </button>

        {isOpen && (
          <ul className="project-filter__dropdown-menu" role="listbox">
            {TYPE_FILTERS.map((filter) => (
              <li key={filter} role="option" aria-selected={activeType === filter}>
                <button
                  type="button"
                  onClick={() => handleSelect(filter)}
                  className={`project-filter__dropdown-item ${
                    activeType === filter ? "is-active" : ""
                  }`}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}