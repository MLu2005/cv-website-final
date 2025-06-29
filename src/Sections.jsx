import React from 'react';

const Sections = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', color: 'white' }}>
      {/* About Me */}
      <section id="about" style={{ marginBottom: '4rem' }}>
        <h2>About Me</h2>
        <p>
          I’m Micheal, a passionate developer exploring cloud engineering and artificial intelligence.
          This site is my digital portfolio, showcasing who I am and what I’ve built.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" style={{ marginBottom: '4rem' }}>
        <h2>Projects</h2>
        <ul>
          <li><strong>CV Website</strong> – This very website deployed to Azure 🚀</li>
          <li><strong>Database Log Analyzer</strong> – Java + Random Forest project for security logs 🔍</li>
          <li><strong>Titan Mission Simulator</strong> – Physics simulation with optimization in Java ☄️</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Contact</h2>
        <p>
          Reach out via <a href="mailto:micheal@example.com" style={{ color: '#4ea0f0' }}>email</a>, or message me on <a href="https://www.linkedin.com" style={{ color: '#4ea0f0' }}>LinkedIn</a>.
        </p>
      </section>
    </div>
  );
};

export default Sections;
