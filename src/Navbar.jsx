// src/Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "./LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

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
      <Link
        to="/"
        style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          color: "white",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        Michael
      </Link>

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
            {language === "en" ? "About Me" : "O mnie"}
          </Link>
        </li>
        <li>
          <Link to="/projects" style={linkStyle}>
            {language === "en" ? "Projects" : "Projekty"}
          </Link>
        </li>
        <li>
          <Link to="/contact" style={linkStyle}>
            {language === "en" ? "Contact" : "Kontakt"}
          </Link>
        </li>
        <li>
          <a href="/cv.pdf" download style={linkStyle}>
            {language === "en" ? "Download CV" : "Pobierz CV"}
          </a>
        </li>
        <li>
          <button onClick={toggleLanguage} style={buttonStyle}>
            {language === "en" ? "PL" : "EN"}
          </button>
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
