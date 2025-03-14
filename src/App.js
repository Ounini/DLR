import "./App.css";
import "./HomeBreak.css";
import { Routes, Route } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About.js";
import Ministry from "./components/Ministry.js";
import Programmes from "./components/Programmes.js";
import Sermons from "./components/Sermons.jsx";
import Contact from "./components/Contact.js";

function App() {
  return (
    <>
      <header>
        <TheNavbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/ministry" element={<Ministry />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/resources" element={<Sermons />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
