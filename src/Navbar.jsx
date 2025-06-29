// src/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#111",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Micheal</div>

      <ul
        style={{
          display: "flex",
          gap: "1.5rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
          alignItems: "center",
        }}
      >
        <li>
          <Link to="/about" style={linkStyle}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="/projects" style={linkStyle}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>
        </li>
        <li>
          <a href="/cv.pdf" download style={linkStyle}>
            Download CV
          </a>
        </li>
        <li>
          <button style={buttonStyle}>PL/EN</button>
        </li>
      </ul>
    </nav>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "0.95rem",
};

const buttonStyle = {
  backgroundColor: "#fff",
  color: "#111",
  border: "none",
  padding: "0.3rem 0.8rem",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Navbar;
