import { Container } from "react-bootstrap";
import { PageHeaders } from "./PageHeaders";
import contact from "../assest/images/pic3.png";

var pageHeader = "Contact Us";
var pageShorty =
  "We’d love to hear from you! Reach out for inquiries, prayers.";

function Contact() {
  return (
    <Container fluid className="con">
      <section>
        <PageHeaders
          img={contact}
          imgAbout={"Contact Us"}
          pageHeader={pageHeader}
          pageShorty={pageShorty}
        />
      </section>
    </Container>
  );
}

export default Contact;
