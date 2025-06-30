import React, { useEffect, useState, useContext } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./translations";

const Hero = () => {
  const [visits, setVisits] = useState(null);
  const [copied, setCopied] = useState(false);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  useEffect(() => {
    fetch("/api/visitorCounter")
      .then((res) => res.json())
      .then((data) => {
        if (data.visits !== undefined) {
          setVisits(data.visits);
        }
      })
      .catch((err) => console.error("Failed to load visit count:", err));
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("lubinskimichal2005@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30vh", color: "white" }}>
      <h1>{t.heroTitle}</h1>
      <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
        {visits !== null ? `${t.visits}: ${visits}` : t.loadingVisits}
      </p>
      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <a
          href="https://github.com/MLu2005"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/michal-lubinski"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <FaLinkedin size={30} />
        </a>
        <button
          onClick={handleCopyEmail}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
          title={t.copyEmail}
        >
          <FaEnvelope size={30} />
        </button>
      </div>
      {copied && <p style={{ marginTop: "0.5rem", color: "#7fffd4" }}>{t.emailCopied}</p>}
    </div>
  );
};

export default Hero;
