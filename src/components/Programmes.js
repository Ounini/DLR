import { Button, Container } from "react-bootstrap";
import { PageHeaders } from "./PageHeaders";
import programme from "../assest/images/pic3.png";

const pageHeader = "Our Programmes";
const pageShorty = "Let us not give up meeting together...";

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
                <strong>Sunday:</strong> Worship Service 9:00 AM - 12:00 PM
              </li>
              <li>
                <strong>Wednesday:</strong> Bible Study & Prayer 6:00 PM - 8:00
                PM
              </li>
              <li>
                <strong>Friday:</strong> Prayer Meetings 6:00 PM - 8:00 PM
              </li>
            </ul>
          </article>
          <article>
            <h4>Special Programmes & Events</h4>
            <ul>
              <li>
                <strong>Monthly Night of Encounter</strong>
                <p>Last Friday of the Month | 9:00 PM - 4:00 AM</p>
              </li>
              <li>
                <strong>Annual Revival Conference</strong>
                <p>4th of April | 8:00 AM - 3:00 PM</p>
              </li>
              <li>
                <strong>Youth & Teens Fellowship</strong>
                <p>Every Last Saturday | 4:00 PM - 6:00 PM</p>
              </li>
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
