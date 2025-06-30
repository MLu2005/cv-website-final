import React, { useState, useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { translations } from './translations';

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const projects = t.projectsList;

  const toggleProject = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>{t.projectsHeading}</h2>
      {projects.map((project) => (
        <div key={project.id} style={projectCardStyle}>
          <div style={titleRowStyle}>
            <h3 style={titleStyle}>{project.title}</h3>
            <button style={buttonStyle} onClick={() => toggleProject(project.id)}>
              {expandedId === project.id ? t.hide : t.showMore}
            </button>
          </div>
          <p>{project.shortDesc}</p>
          {expandedId === project.id && (
            <div>
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                style={{ maxWidth: '100%', margin: '1rem 0', borderRadius: '10px' }}
              />
              <p>{project.fullDesc}</p>
              <strong>{t.tasks}</strong>
              <ul>
                {project.tasks.map((task, i) => <li key={i}>{task}</li>)}
              </ul>
              <strong>{t.myTasks}</strong>
              <ul>
                {project.myTasks.map((task, i) => <li key={i}>{task}</li>)}
              </ul>
              <strong>{t.skills}</strong>
              <ul>
                {project.skills.map((skill, i) => <li key={i}>{skill}</li>)}
              </ul>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  {t.viewOnGitHub}
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

// === Style ===

const sectionStyle = {
  padding: '4rem 2rem',
  backgroundImage: 'url("/your-projects-bg.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  color: 'white',
  minHeight: '100vh',
  backdropFilter: 'blur(8px)'
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '2.5rem',
  marginBottom: '2rem'
};

const projectCardStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '1.5rem',
  borderRadius: '10px',
  marginBottom: '2rem',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
  boxShadow: '0 0 20px rgba(0,0,0,0.3)'
};

const titleRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const titleStyle = {
  fontSize: '1.5rem',
  margin: 0
};

const buttonStyle = {
  padding: '0.4rem 1rem',
  backgroundColor: '#fff',
  color: '#111',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

const linkStyle = {
  color: '#8ab4f8',
  textDecoration: 'underline',
  fontWeight: 'bold',
  display: 'inline-block',
  marginTop: '1rem'
};

export default Projects;
