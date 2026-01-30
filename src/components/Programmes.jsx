import { Button, Container } from "react-bootstrap";
import { PageHeaders } from "./PageHeaders";
import programme from "../assest/images/pic1.jpg";

const pageHeader = "Our Programmes";
const pageShorty = "Let us not give up meeting together...";

var ThursdayProgramm = "Capture Your Glory";

function Programmes() {
  return (
    <Container fluid className="con">
      <section>
        <PageHeaders
          img={programme}
          imgAbout={"Our Programmes"}
          pageHeader={pageHeader}
          pageShorty={pageShorty}
        />
        <section className="p-4">
          <article>
            <h4>Weekly Programmes</h4>
            <ul>
              <li>
                <strong>Sunday:</strong> Sunday Worship 7:30 AM - 9:30 AM
              </li>
              <li>
                <strong>Thursday:</strong> {ThursdayProgramm} 12:00 AM - 1:00 AM
              </li>
            </ul>
          </article>
          <article>
            <h4>Special Programmes & Events</h4>
            <ul>
              <li>
                <strong>Recovery Your Glory</strong>
                <p>13th of May 2025 | 9:00 PM - 4:00 AM</p>
              </li>
              <li>
                <strong>Revival Service</strong>
                <p>18th of May | 7:30 AM - 9:30 AM</p>
              </li>
              {/* <li>
                <strong>Youth & Teens Fellowship</strong>
                <p>Every Last Saturday | 4:00 PM - 6:00 PM</p>
              </li> */}
            </ul>
            <p>
              "Stay tuned! More special programs and events will be announced
              soon."
            </p>
          </article>
          <div className="text-center">
            <p>Watch Us Live</p>
            <Button className="buttoned" href="/live">
              Watch Live
            </Button>
          </div>
        </section>
      </section>
    </Container>
  );
}

export default Programmes;
