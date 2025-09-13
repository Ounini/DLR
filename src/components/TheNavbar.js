import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assest/images/logo.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function TheNavbar() {
  const [navbar, setNavbar] = useState(false);

  const backgroundChange = () => {
    if (window.innerWidth > 360 && window.scrollY > 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", backgroundChange);
    window.addEventListener("resize", backgroundChange);

    return () => {
      window.removeEventListener("scroll", backgroundChange);
      window.removeEventListener("resize", backgroundChange);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`w-100 navBody custom-nav ${navbar ? "scrolled" : ""}`}
    >
      <Container fluid>
        <Navbar.Brand className="navLogo" href="/">
          <img src={logo} className="d-inline-block align-top" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar001" />
        <Navbar.Collapse id="navbar001 z-3">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about-us">
              About Us
            </NavLink>
            <NavLink className="nav-link" to="/ministry">
              The Ministry
            </NavLink>
            <NavLink className="nav-link" to="/programmes">
              Programmes
            </NavLink>
            <NavLink className="nav-link" to="/resources">
              Sermons and Music
            </NavLink>
            <NavLink className="nav-link" to="/contact-us">
              Contact Us
            </NavLink>
            <NavLink to="/live" className="liveBar nav-link">
              Join us Live
            </NavLink>
            <NavLink to="/offerings" className="offeringsBar nav-link">
              Offerings
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TheNavbar;
