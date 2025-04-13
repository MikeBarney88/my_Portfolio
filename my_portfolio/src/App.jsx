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
              <div className="pc-header">
                <h1></h1>
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
