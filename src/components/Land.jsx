import React, { useState } from "react";
import { Link } from "react-router-dom";

const Land = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <header style={styles.header}>
          <h1 style={styles.title}>VISVODAYANS CODEBREW</h1>
          <p style={styles.tagline}>Brew Your Coding Skills to Perfection</p>
          <nav style={styles.nav}>
            <Link
              to="/playground"
              style={{
                ...styles.navLink,
                ...(hoveredLink === "playground" && styles.navLinkHover),
              }}
              onMouseEnter={() => handleMouseEnter("playground")}
              onMouseLeave={handleMouseLeave}
            >
              Coding Playground
            </Link>
            <Link
              to="/arena"
              style={{
                ...styles.navLink,
                ...(hoveredLink === "arena" && styles.navLinkHover),
              }}
              onMouseEnter={() => handleMouseEnter("arena")}
              onMouseLeave={handleMouseLeave}
            >
              Coding Arena
            </Link>
            <Link
              to="/battleground"
              style={{
                ...styles.navLink,
                ...(hoveredLink === "battleground" && styles.navLinkHover),
              }}
              onMouseEnter={() => handleMouseEnter("battleground")}
              onMouseLeave={handleMouseLeave}
            >
              Coding Battleground
            </Link>
          </nav>
        </header>

        <main style={styles.main}>
          <div
            id="playground"
            style={{ ...styles.section, ...styles.playground }}
          >
            <h2 style={styles.sectionTitle}>Coding Playground</h2>
            <p style={styles.sectionText}>
              Experiment with code, try out new ideas, and improve your skills
              in a relaxed environment.
            </p>
          </div>

          <div id="arena" style={{ ...styles.section, ...styles.arena }}>
            <h2 style={styles.sectionTitle}>Coding Arena</h2>
            <p style={styles.sectionText}>
              Take on coding challenges, solve problems, and compete with others
              to sharpen your skills.
            </p>
          </div>

          <div
            id="battleground"
            style={{ ...styles.section, ...styles.battleground }}
          >
            <h2 style={styles.sectionTitle}>Coding Battleground</h2>
            <p style={styles.sectionText}>
              Engage in coding battles with other developers, prove your mettle,
              and rise to the top.
            </p>
          </div>
        </main>

        <footer style={styles.footer}>
          <p>&copy; 2024 VISVODAYANS CODEBREW. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

const styles = {
  container: {
    overflowX: "hidden", // Prevent horizontal scrolling
    margin: "0",
    padding: "0",
    backgroundImage: 'url("codingbg.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  content: {
    maxWidth: "1200px", // Constrain width for better readability
    margin: "0 auto", // Center content
    padding: "20px",
    color: "white",
    textAlign: "center",
  },
  header: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    padding: "30px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    margin: "20px auto",
    maxWidth: "800px",
  },
  title: {
    fontSize: "3.5em",
    margin: "0",
    fontFamily: "'Roboto', sans-serif",
  },
  tagline: {
    fontSize: "1.5em",
    margin: "10px 0 20px",
    fontFamily: "'Open Sans', sans-serif",
  },
  nav: {
    marginTop: "15px",
  },
  navLink: {
    margin: "0 20px",
    color: "#61dafb",
    textDecoration: "none",
    fontSize: "1.2em",
    fontFamily: "'Roboto', sans-serif",
    transition: "color 0.3s ease",
  },
  navLinkHover: {
    color: "#21a1f1",
  },
  main: {
    padding: "20px 0",
  },
  section: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "40px 20px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
  playground: {
    backgroundColor: "#ffe4b5",
  },
  arena: {
    backgroundColor: "#add8e6",
  },
  battleground: {
    backgroundColor: "#90ee90",
  },
  sectionTitle: {
    fontSize: "2.5em",
    margin: "0 0 20px",
    fontFamily: "'Roboto', sans-serif",
    color: "#333",
  },
  sectionText: {
    fontSize: "1.2em",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "'Open Sans', sans-serif",
    color: "#555",
  },
  footer: {
    backgroundColor: "#1e1e1e",
    padding: "20px",
    textAlign: "center",
    color: "white",
    marginTop: "50px",
  },
};

export default Land;
