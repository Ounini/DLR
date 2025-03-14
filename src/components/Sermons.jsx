import { useEffect, useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { PageHeaders } from "./PageHeaders";
import sermons from "../assest/images/pic3.png";
import { Link, useLocation } from "react-router-dom";
import youtubeListen from "../assest/images/youtube.png";
import spotifyListen from "../assest/images/spotify.png";
import appleListen from "../assest/images/apple.svg";

var pageHeader = "Sermons";
var pageShorty = "Be inspired by God’s Word and uplifting worship.";

const sermonsData = [
  {
    id: 1,
    title: "God the Author 1",
    description:
      "God is the author of our lives, and He is the one who gives us",
    date: "2020-01-01",
    link: "#",
    image: sermons,
  },
  {
    id: 2,
    title: "God the Author 2",
    description:
      "God is the author of our lives, and He is the one who gives us",
    date: "2020-02-02",
    link: "#",
    image: sermons,
  },
  {
    id: 3,
    title: "God the Author 3",
    description:
      "God is the author of our lives, and He is the one who gives us",
    date: "2020-03-03",
    link: "#",
    image: sermons,
  },
];

function Sermons() {
  const targetRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#musics") {
      targetRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <Container fluid className="con">
      <section>
        <PageHeaders
          img={sermons}
          imgAbout={"Sermons and Music"}
          pageHeader={pageHeader}
          pageShorty={pageShorty}
        />
        <section className="p-3">
          <article className="sermonsArt">
            <h4>Latest Sermon</h4>
            <img src={sermons} alt="Last Sunday Sermon" className="img-fluid" />
            <h6>Title: God the Author 4</h6>
            <p>
              God is the creator of all this we know and see today, without God
              was nothing made. Therefore, He is our Author
            </p>
            <Button href="#" className="buttoned">
              Watch now
            </Button>
          </article>
          <article className="sermonsArt">
            <h4>More Sermons from our senior pastor</h4>
            <Row>
              {sermonsData.map((sermon) => (
                <Col
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                  key={sermon.id}
                  className="sermonCol"
                >
                  <img
                    src={sermon.image}
                    alt={sermon.title}
                    className="img-fluid"
                  />
                  <h6>{sermon.title}</h6>
                  <p>{sermon.description}</p>
                  <p>Date: {sermon.date}</p>
                  <Button href={sermon.link} className="mb-5 buttoned">
                    Watch now
                  </Button>
                </Col>
              ))}
            </Row>
          </article>
          <article>
            <h4 ref={targetRef} id="musics">
              Music
            </h4>
            <Row>
              <Col className="youtubeImg">
                <Link to="https://youtube.com">
                  <img src={youtubeListen} alt="Listen on Youtube" />
                </Link>
              </Col>
              <Col className="youtubeImg">
                <Link to="https://spotify.com">
                  <img src={spotifyListen} alt="Listen on spotify" />
                </Link>
              </Col>
              <Col className="youtubeImg">
                <Link to="https://apple.com">
                  <img src={appleListen} alt="Listen on apple" />
                </Link>
              </Col>
            </Row>
          </article>
        </section>
      </section>
    </Container>
  );
}

export default Sermons;
