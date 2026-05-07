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
import Upload from "./components/Upload";
import AdminLogin from "./components/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <header>
        <TheNavbar />
      </header>
      <main>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/ministry" element={<Ministry />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/resources" element={<Sermons />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/live" element={<Live />} />
          <Route path="/offerings" element={<Offering />} />
          <Route path="/admin/login" element={<AdminLogin />} />

          <Route
            path="/admin/upload"
            element={
              <ProtectedRoute>
                <Upload />
              </ProtectedRoute>
            }
          />
        </Routes>
        <GoUp />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
