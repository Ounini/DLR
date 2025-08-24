import { useState } from "react";
import { Button, Col, Container, Form, Row, Toast } from "react-bootstrap";
import { PageHeaders } from "./PageHeaders";
import contact from "../assest/images/pic1.jpg";
import { useForm } from "@formspree/react";

var pageHeader = "Contact Us";
var pageShorty =
  "We'd love to hear from you! Reach out for inquiries, prayers.";

function Contact() {
  const [state, handleSubmit] = useForm("mkgjgojv");
  const [showToast, setShowToast] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    setShowToast(true);
    setFormData({ name: "", phoneNumber: "", message: "" });
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <Container fluid className="con">
      <section>
        <PageHeaders
          img={contact}
          imgAbout={"Contact Us"}
          pageHeader={pageHeader}
          pageShorty={pageShorty}
        />

        <section className="contactSec">
          <Row>
            <Col md={6} className="sectionServices">
              <h4>Phone & Email</h4>
              <div>
                <h6>General Enquiries</h6>
                <p>
                  <strong>Phone:</strong>
                  <a href="tel:+2349036610547"> +234 (0)903 661 0547</a>,
                  <a href="tel:+2348052975719"> +234 (0)805 297 5719</a>
                </p>
                {/* <p>
                  <strong>Email:</strong>
                  <a href="mailto:enquires@dlr.org"> enquires@dlr.org</a>
                </p> */}
              </div>
              <div>
                <h6>WEBSITE ISSUES</h6>
                <p>
                  <strong>Phone:</strong>
                  <a href="tel:+2347069989300"> +234 (0)706 998 9300</a>
                </p>
              </div>
            </Col>

            <Col className="sectionServices">
              <h4>COUNSELLING AND PRAYERS</h4>
              <p>
                If you would like to be counselled or need prayers, contact us
                on any of these phone numbers below:
              </p>
              <p>
                <strong>Phone:</strong>
                <a href="tel:+2348052975719"> +234 (0)805 297 5719</a>
              </p>
            </Col>
          </Row>
          <fieldset className="formed">
            <legend>Send us a message</legend>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group>
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="contact">Contact</Form.Label>
                <Form.Control
                  id="contact"
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="message">Your Message</Form.Label>
                <Form.Control
                  id="message"
                  as="textarea"
                  rows="3"
                  name="message"
                  placeholder="Write your message or request here"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button type="submit" className="buttoned">
                Send
              </Button>
            </Form>
          </fieldset>
        </section>
      </section>

      {/* ✅ Bootstrap Toast Notification (Now Works!) */}
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        className="position-fixed bottom-0 end-0 p-3"
        bg="success"
        delay={3000}
        autohide
      >
        <Toast.Body className="text-white">
          ✅ Message sent successfully!
        </Toast.Body>
      </Toast>
    </Container>
  );
}

export default Contact;
