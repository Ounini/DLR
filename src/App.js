import "./App.css";
import "./HomeBreak.css";
import { Routes, Route } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <TheNavbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
