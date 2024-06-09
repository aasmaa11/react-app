import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToHashElement from "./components/ScrollToHashElement";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div className="container mt-2" style={{ marginTop: 40 }}>
          <Routes></Routes>
        </div>

        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>

        <ScrollToHashElement></ScrollToHashElement>
      </Router>
    </div>
  );
}

export default App;
