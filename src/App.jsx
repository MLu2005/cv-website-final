import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer"; // 🆕 dodany import

function App() {
  const backgroundStyle = (imageUrl) => ({
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    paddingTop: "4rem", // miejsce dla Navbar
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div style={backgroundStyle("/backgrounds/hero.jpg")}>
              <Hero />
              <Footer />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div style={backgroundStyle("/backgrounds/about.jpg")}>
              <About />
              <Footer />
            </div>
          }
        />
        <Route
          path="/projects"
          element={
            <div style={backgroundStyle("/backgrounds/projects.png")}>
              <Projects />
              <Footer />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div style={backgroundStyle("/backgrounds/contact.jpg")}>
              <Contact />
              <Footer />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
