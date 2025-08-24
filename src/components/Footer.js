import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col sm={12} md={6} xl={4}>
          <h6>Contact Info</h6>
          <p>
            Phone: <a href="tel:+2349036610547"> +234 (0)903 661 0547</a>
            <a href="tel:+2348052975719"> +234 (0)805 297 5719</a>
          </p>
          {/* <p>
            Email: <a href="mailto:enquires@dlr.org"> enquires@dlr.org</a>
          </p> */}
        </Col>
        <Col sm={12} md={6} xl={4}>
          <h6>Quick links</h6>
          <div className="quickLinks">
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/ministry">The Ministry</Link>
            <Link to="/programmes"> Programmes</Link>
            <Link to="/resources"> Sermons and Music</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/live">Live</Link>
            <Link to="/offerings">Offerings</Link>
          </div>
        </Col>
        <Col sm={12} md={6} xl={4} className="socialCol">
          <h6 className="follow">Follow Us</h6>
          <div className="socialMedia">
            <Link target="_blank" to="https://facebook.com">
              <i className="bi bi-facebook" />
            </Link>
            <Link
              target="_blank"
              to="https://www.youtube.com/@divine_light_resurrection"
            >
              <i className="bi bi-youtube" />
            </Link>
          </div>
        </Col>
      </Row>
      <p className="copyright">
        copyright &copy; {year} - Divine Light Of Resurrection Ministries. All
        rights Reserved.
      </p>
    </Container>
  );
}

export default Footer;
