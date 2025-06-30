// src/About.jsx
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { translations } from './translations';

const About = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>{t.aboutHeading}</h2>

      <img
        src="/michal.jpg"
        alt="Micheal's profile"
        style={styles.image}
      />

      <p style={styles.text}>{t.aboutText}</p>

      <h3 style={styles.subheading}>{t.skillsHeading}</h3>
      <ul style={styles.list}>
        <li>🔹 Java, Python, Azure</li>
        <li>🔹 JavaFX, React, Vite</li>
        <li>🔹 Azure Static Web Apps, GitHub Actions (CI/CD), Maven</li>
        <li>🔹 OOP, Math Modeling, AI (Random Forests, Evolutionary Algorithms)</li>
      </ul>

      <h3 style={styles.subheading}>{t.certificationsHeading}</h3>
      <ul style={styles.list}>
        <li>✔️ Microsoft Azure Fundamentals (AZ-900)</li>
        <li>✔️ IELTS Academic</li>
      </ul>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 2rem',
    maxWidth: '800px',
    margin: '0 auto',
    color: 'white',
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
    color: 'white',
  },
};

export default About;
