import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Header from "./images/Header.png";

function App() {
  return (
    <Router>
      <header>
        <img src={Header} width="100%" height="100%" alt="My header" />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <div className="about-header">
                <h1>About Me</h1>
              </div>
              <div className="about-section">
                <p>
                  Hi Im Michael Barney and I am a Software Development student at
                  Keyin College, specalizing is Python, JavaScript, React,
                  Amazon Web Services, as well as Product Design. I've put
                  together a colabration of some of the work I have done so far
                  in my Journey.
                </p>
              </div>
            </main>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer>
        <div className="footer-left">© Michael Barney 2025</div>
      </footer>
    </Router>
  );
}

export default App;
