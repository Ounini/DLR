import "./App.css";
import "./HomeBreak.css";
import { Routes, Route } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Ministry from "./components/Ministry";
import Programmes from "./components/Programmes";
import Sermons from "./components/Sermons";
import Contact from "./components/Contact";
import Live from "./components/Live";
import Offering from "./components/Offering";
import GoUp from "./components/GoUp";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
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
          <Route path="/live" element={<Live />} />
          <Route path="/offerings" element={<Offering />} />
        </Routes>
        <GoUp />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
