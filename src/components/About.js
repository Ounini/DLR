import { Button, Container } from "react-bootstrap";
import { PageHeaders } from "./PageHeaders";
import about from "../assest/images/pic3.png";
import pastor from "../assest/images/pic2.jpg";

var pageHeader = "Welcome to DLR";
var pageShorty =
  "For where two or three gather in my name, there am I with them.";

function About() {
  return (
    <Container fluid className="con">
      <section>
        <PageHeaders
          img={about}
          imgAbout={"About DLR"}
          pageHeader={pageHeader}
          pageShorty={pageShorty}
        />
        <div className="d-flex justify-content-center align-items-center my-3">
          <Button className="buttoned">Join Us Live</Button>
        </div>
        <section className="p-3">
          <article>
            <h4>Our Mission</h4>
            <p>
              At Divine Life of Resurrection, our mission is to spread the love
              of Christ, serve our community, and nurture spiritual growth
              through worship and discipleship.
            </p>
          </article>
          <article>
            <h4>Our Vision</h4>
            <p>
              To be a beacon of faith, hope, and love, transforming lives
              through the power of God{"'"}s word.
            </p>
          </article>
          <article>
            <h4>Statement of Faith(What we believe)</h4>
            <ul>
              <li>
                <strong>God:</strong> Belief in the Trinity (Father, Son and
                Holy Spirit).
              </li>
              <li>
                <strong>Jesus Christ:</strong> Salvation through Jesus Christ.
              </li>
              <li>
                <strong>The Bible:</strong> God{"'"}s inspired and infallible
                word.
              </li>
              <li>
                <strong>Salvation:</strong> Repentance, grace and faith in Jesus
                Christ.
              </li>
              <li>
                <strong>Holy Spirit:</strong> Guidance and empowerment for
                believers.
              </li>
            </ul>
          </article>
          <article className="thePastor">
            <h4 className="text-center pt-5">Meet Our Senior Pastor</h4>
            <img
              src={pastor}
              alt="The Pastor of Divine Life of Resurrection"
              className="img-fluid"
            />
            <h6 className="text-center fw-bolder pt-3">Apostle Sunny</h6>
            <p>
              Apostle Sunny is a passionate servant of God, dedicated to
              preaching the gospel, transforming lives, and equipping believers
              to fulfill their divine purpose. With a deep love for God{"'"}s
              Word and a strong commitment to prayer, he has been a guiding
              light in leading many to Christ. His ministry is marked by
              powerful teachings, prophetic insights, and a heart for revival.
              Through his leadership, Divine Life Of Resurrection continues to
              impact lives, bringing healing, deliverance, and spiritual growth
              to individuals and families.
            </p>
            <h6 className="fw-bolder text-center">
              A Message from our senior pastor
            </h6>
            <p>
              <span>Dear Beloved,</span>
              <br /> I warmly welcome you to Divine Life Of Resurrection, a
              place where God{"'"}s presence dwells, and lives are transformed.
              It is my prayer that as you connect with us, you will experience
              the love, peace, and power of God in a new way. No matter where
              you come from or what you have been through, know that you are
              loved, valued, and destined for greatness in Christ. May God bless
              you abundantly, and I look forward to worshiping with you! <br />
              <span>{"-"} Apostle Sunny</span>
            </p>
          </article>
        </section>
      </section>
    </Container>
  );
}

export default About;
