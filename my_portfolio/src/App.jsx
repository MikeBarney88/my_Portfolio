import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductGallery from "./components/ProjectGallery";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Header from "./images/Header.png";
import AWS from "./images/Aws.png";
import Figma from "./images/Figma.png";
import JavaScript from "./images/JavaScript.png";
import React from "./images/React.png";
import Python from "./images/Python.png";
import ReactSample from "./images/ReactSample.jpg";
import SunnyBites from "./images/SunnyBites.jpg";
import Qap1 from "./images/Qap1.jpg";

function App() {
  return (
    <Router>
      <header>
        <img
          className="header-img"
          src={Header}
          width="100%"
          height="100%"
          alt="My header"
        />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <img
                className="card about-img"
                src={ReactSample}
                width="100%"
                height="100%"
                alt="sample code"
              />
              <p className="card about-section">
                Welcome! I'm Michael Barney, an emerging software developer
                currently studying at Keyin College. My technical toolkit
                includes Python, JavaScript, React, and AWS, enhanced by product
                design principles. This portfolio curates projects that
                illustrate my growth and readiness for professional development
                opportunities.
              </p>
              <div className="card img-section">
                <img src={React} width="40%" height="40%" alt="React Logo" />
                <img src={Figma} width="40%" height="40%" alt="Figma logo" />
                <img
                  src={JavaScript}
                  width="55%"
                  height="55%"
                  alt="JavaScript"
                />
                <img
                  className="python"
                  src={Python}
                  width="30%"
                  height="30%"
                  alt="Python"
                />
                <img
                  src={AWS}
                  width="40%"
                  height="40%"
                  alt="Amazon Web Services Logo"
                />
              </div>
            </main>
          }
        />

        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <footer>
        <div className="footer-left">© Michael Barney 2025</div>
      </footer>
    </Router>
  );
}

export default App;
