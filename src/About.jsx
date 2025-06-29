// src/About.jsx
import React from 'react';

const About = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>

      <img
        src="/michal.jpg" // ← wrzuć plik .jpg z Twoim zdjęciem do folderu public
        alt="Micheal's profile"
        style={styles.image}
      />

      <p style={styles.text}>
        Hi! I'm <strong>Micheal</strong>, a Data Science & AI student passionate about cloud computing,
        simulation, and modern web development. I'm building my career path towards becoming a
        certified Cloud Engineer and Azure expert. This website is part of that journey 🚀
      </p>

      <h3 style={styles.subheading}>Skills & Technologies</h3>
      <ul style={styles.list}>
        <li>🔹 JavaScript, React, Vite</li>
        <li>🔹 Python, MATLAB, LaTeX</li>
        <li>🔹 Azure Static Web Apps, GitHub Actions</li>
        <li>🔹 Data Analysis, Machine Learning (Random Forest, ODEs)</li>
      </ul>

      <h3 style={styles.subheading}>Certifications</h3>
      <ul style={styles.list}>
        <li>✔️ Microsoft Azure Fundamentals (AZ-900)</li>
        <li>✔️ In progress: AI-900 & AZ-204</li>
      </ul>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 2rem',
    maxWidth: '800px',
    margin: '0 auto',
    color: 'white', // ← wcześniej było #333, zmieniamy na jasny
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: 'white',
  },
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    margin: '1rem 0',
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: 'white',
  },
  subheading: {
    fontSize: '1.3rem',
    marginTop: '2rem',
    marginBottom: '0.5rem',
    color: 'white',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '1rem',
    lineHeight: '1.5',
    color: 'white', // ← również tu
  },
};


export default About;
