import React from "react";

export default function Portfolio() {
  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
      {/* Hero */}
      <section
        data-aos="fade-up"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 10vw",
        }}
      >
        <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>Tom Leonard</h1>
        <h2 style={{ fontSize: "2rem", fontWeight: 400, opacity: 0.85 }}>
          Full Stack Developer
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "800px",
            lineHeight: "1.8",
            marginTop: "2rem",
            opacity: 0.7,
          }}
        >
          I build sleek, scalable apps from front to back — clean code, responsive design, and cloud-native architecture.
        </p>
      </section>

      {/* Projects Sticky Header */}
      <section
        style={{
          position: "sticky",
          top: 0,
          zIndex: 2,
          backgroundColor: "#0f0f0f",
          padding: "10vh 0",
        }}
      >
        <h2
          data-aos="fade-in"
          style={{
            fontSize: "3rem",
            textAlign: "center",
            margin: 0,
          }}
        >
          Projects
        </h2>
      </section>

      {/* Project 1 */}
      <section
        data-aos="fade-up"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "5vh 10vw",
        }}
      >
        <div style={{ maxWidth: "1000px", width: "100%", textAlign: "left" }}>
          <h3 style={{ fontSize: "2rem" }}>Fractal Cursor Background</h3>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              opacity: 0.75,
              marginBottom: "3rem",
              maxWidth: "800px",
            }}
          >
            An animated fractal grid that reacts to cursor movement. Built using canvas in React, this component draws a web of connections with dynamic light and motion.
          </p>
          <div
            style={{
              height: "400px",
              width: "100%",
              backgroundColor: "#1a1a1a",
              borderRadius: "12px",
              border: "1px solid #333",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#777",
              fontStyle: "italic",
            }}
          >
            [ Project Demo / Screenshot ]
          </div>
        </div>
      </section>

      {/* Project 2 */}
      <section
        data-aos="fade-up"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "5vh 10vw",
        }}
      >
        <div style={{ maxWidth: "1000px", width: "100%", textAlign: "left" }}>
          <h3 style={{ fontSize: "2rem" }}>SQLite + Faker Data Generator</h3>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              opacity: 0.75,
              marginBottom: "3rem",
              maxWidth: "800px",
            }}
          >
            A Python tool that generates fake customer data and stores it in an SQLite `.db` file. Great for testing SQL queries and learning relational databases.
          </p>
          <div
            style={{
              height: "400px",
              width: "100%",
              backgroundColor: "#1a1a1a",
              borderRadius: "12px",
              border: "1px solid #333",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#777",
              fontStyle: "italic",
            }}
          >
            [ Project Demo / Screenshot ]
          </div>
        </div>
      </section>
    </div>
  );
}
