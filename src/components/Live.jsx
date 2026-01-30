import {
  //  Col,
  Container,
  Row,
} from "react-bootstrap";
import { PageHeaders } from "./PageHeaders";
import live from "../assest/images/pic1.jpg";
import LiveStream from "./LiveStream";

var pageHeader = "Watch Live";
var pageShorty = "Experience God's presence from anywhere, join us live!";

// const liveData = [
//   {
//     id: 1,
//     title: "Last Week Sermon",
//     url: "https://www.youtube.com/watch?v=ohxNRMBUKiQ&t=5s",
//     image: <i class="bi bi-youtube" />,
//     class: "youtube",
//   },
//   {
//     id: 2,
//     title: "All Sermons",
//     url: "https://www.youtube.com/watch?v=ohxNRMBUKiQ&t=5s",
//     image: <i class="bi bi-youtube" />,
//     class: "youtube",
//   },
//   {
//     id: 3,
//     title: "Facebook Page",
//     url: "https://www.youtube.com/watch?v=ohxNRMBUKiQ&t=5s",
//     image: <i class="bi bi-facebook" />,
//     class: "facebook",
//   },
// ];

function Live() {
  return (
    <Container fluid className="con">
      <section>
        <PageHeaders
          img={live}
          imgAbout={"Watch Live"}
          pageHeader={pageHeader}
          pageShorty={pageShorty}
        />

        <section
          className="contactSec
        "
        >
          <Row className="liveRow">
            <LiveStream />
            {/* {liveData.map((live) => (
              <Col sm={12} md={4} key={live.id} className={live.class}>
                <a target="_blank" href={live.url} rel="noreferrer">
                  {live.image}
                  <span>{live.title}</span>
                </a>
              </Col>
            ))} */}
          </Row>
        </section>
      </section>
    </Container>
  );
}

export default Live;
