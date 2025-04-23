import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import FractalBackground from "./fractal";
import Portfolio from "./portfolio";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <FractalBackground />
      <div style={{ position: "relative", zIndex: 2 }}>
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
