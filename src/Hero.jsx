import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const [visits, setVisits] = useState(null); // null = jeszcze nie załadowane

  useEffect(() => {
    fetch("/api/visitorCounter")
      .then((res) => res.json())
      .then((data) => {
        console.log("Visitor data:", data); // debug
        if (data.visits !== undefined) {
          setVisits(data.visits);
        }
      })
      .catch((err) => console.error("Failed to load visit count:", err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30vh", color: "white" }}>
      <h1>Hi, I am Micheal and this is my website about me</h1>
      <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
        {visits !== null ? `Visits: ${visits}` : "Loading visits..."}
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
          href="https://github.com/twoj-github"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://linkedin.com/in/twoj-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:twoj.email@gmail.com" style={{ color: "white" }}>
          <FaEnvelope size={30} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
