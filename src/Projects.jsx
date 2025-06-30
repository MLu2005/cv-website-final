import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Solar System Simulation',
    shortDesc: 'A 2.5D JavaFX simulation of the Solar System using NASA data.',
    fullDesc: 'A space simulation written in JavaFX with gravitational physics, custom probe trajectory planning, and Titan landing scenario. Used evolutionary algorithms and Hill Climbing for optimization.',
    image: '/solar_project.jpeg', // <- wrzuć obrazek do public/
    github: 'https://github.com/MLu2005/solar-system-simulation',
    tasks: [
      'Gravity-based motion simulation',
      'Custom Genetic Algorithm for pathfinding',
      'JavaFX GUI + physics engine'
    ],
    skills: ['Java', 'JavaFX', 'Math modeling', 'AI']
  },
  {
  id: 2,
  title: 'This Very Website',
  shortDesc: 'You’re literally looking at it right now.',
  fullDesc: 'Yes, this portfolio site is one of my projects. It’s built with React, styled with inline CSS (for now), and deployed to Azure Static Web Apps with CI/CD from GitHub. Even the “Download CV” button works. Hopefully.',
  image: '/cv_project.png', // dodaj np. zrzut ekranu strony do public/
  github: 'https://github.com/MLu2005/cv-website-final',
  tasks: [
    'Built in React with Vite ⚡',
    'Deployed to Azure with GitHub Actions 🚀',
    'Config wars with workflows 😤',
    'Documented everything, cried a little'
  ],
  skills: ['React', 'Azure Static Web Apps', 'GitHub Actions', 'CI/CD', 'Strong Google-Fu 🔍']
},
{
  id: 3,
  title: 'Student Performance Predictor',
  shortDesc: 'Our first ever Java-based AI project at uni.',
  fullDesc: 'This was our first big team project (7 people!) at university – built entirely in Java. We analyzed student grades, visualized them in a GUI, and created a Random Forest model to predict missing or future scores. Sadly, Git was a mystery back then, so documentation is... creative.',
  image: '/student_project.png', // wrzuć screenshot do public/
  github: '', // jeśli nie masz repo, zostaw puste
  tasks: [
    'Explored and cleaned real-world student datasets',
    'Created JavaFX/Swing GUI with charts and visuals',
    'Implemented custom Random Forest algorithm',
    'Tuned parameters like leaf size and evaluated splits'
  ],
  skills: [
    'Java', 
    'Data Analysis', 
    'Data Visualization (JavaFX)', 
    'Random Forests', 
    'Team Collaboration',
    'Debugging without Git 😅'
  ]
}


  // dodaj więcej projektów tutaj
];

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleProject = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Projects</h2>
      {projects.map((project) => (
        <div key={project.id} style={projectCardStyle}>
          <div style={titleRowStyle}>
            <h3 style={titleStyle}>{project.title}</h3>
            <button style={buttonStyle} onClick={() => toggleProject(project.id)}>
              {expandedId === project.id ? 'Hide' : 'Show more'}
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
              <strong>Tasks:</strong>
              <ul>
                {project.tasks.map((task, i) => <li key={i}>{task}</li>)}
              </ul>
              <strong>Skills:</strong>
              <ul>
                {project.skills.map((skill, i) => <li key={i}>{skill}</li>)}
              </ul>
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                View on GitHub
              </a>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

const sectionStyle = {
  padding: '4rem 2rem',
  backgroundImage: 'url("/your-projects-bg.jpg")', // <- dodaj obraz do folderu public
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
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // przezroczysty czarny
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
