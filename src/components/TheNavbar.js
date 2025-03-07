import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assest/images/logo.jpg";
import { useEffect, useState } from "react";

function TheNavbar() {
  const [navbar, setNavbar] = useState(false);

  const backgroundChange = () => {
    if (window.innerWidth > 767 && window.scrollY > 50) {
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="/ministry">The Ministry</Nav.Link>
            <Nav.Link href="/programmes">Programmes</Nav.Link>
            <Nav.Link href="/resources">Sermons and Music</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            <Nav.Link href="/live" className="liveBar">
              Join us Live
            </Nav.Link>
            <Nav.Link href="/offerings" className="offeringsBar">
              Offerings
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TheNavbar;
