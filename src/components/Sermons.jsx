import { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PageHeaders } from "./PageHeaders";
import sermons from "../assest/images/pic1.jpg";
import { useLocation } from "react-router-dom";

var pageHeader = "Music";
var pageShorty = "Be inspired by God’s Word and uplifting worship.";

const sermonsData = [
  {
    id: 1,
    title: "Come out from the calvary",
    description:
      "Today's prayer by Apostle Victor Samuel Uwangue. Title: God's unending overflowing power.",
    date: "2025-06-02",
    link: "https://www.youtube.com/embed/6OCbjUMEvgg?si=H547PtIEOqohzs3c",
  },
  {
    id: 2,
    title: "Prayer of Deliverance",
    description:
      "Today's prayer by Apostle Victor Samuel Uwangue. Title: Overdued Pregency.",
    date: "2025-06-03",
    link: "https://www.youtube.com/embed/KLbjKE01klc?si=LuStMoLhIyp99WD_",
  },
  {
    id: 3,
    title: "Prayer of Deliverance",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: The Sword Of Your Enemies Shall Enter Into Their Own Hearts.",
    date: "2025-06-05",
    link: "https://www.youtube.com/embed/U81wdvqrZgk?si=JKpjHIR3kLpoYbHm",
  },
  {
    id: 4,
    title: "Prayer of Declaration",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: O God, heal and repair my faulty foundation.",
    date: "2025-06-08",
    link: "https://www.youtube.com/embed/ViXGVJyM4LM?si=td_8rSSbjoGniUWm",
  },
  {
    id: 5,
    title: "Prayer of Liberation.",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: O God, Destory the evil gathering against you.",
    date: "2025-06-09",
    link: "https://www.youtube.com/embed/af-HwF_tQzg?si=eq0cWdjEYYKNopAx",
  },
  {
    id: 6,
    title: "Prayer of Favour.",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: The Visa You Seek Belongs To God.",
    date: "2025-06-12",
    link: "https://www.youtube.com/embed/xbenKmHoot0?si=Hm07aryAA-3AUbSL",
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
          {/* <article className="sermonsArt">
            <h4>Latest Sermon</h4>
            <img
              src={sermons}
              alt="Last Sunday Sermon"
              className="img-fluid mx-auto d-block sermonImg"
            />
            <h6>Title: God the Author 4</h6>
            <p>
              God is the creator of all this we know and see today, without God
              was nothing made. Therefore, He is our Author
            </p>
            <Button href="#" className="buttoned">
              Watch now
            </Button> 
          </article> */}
          <article className="sermonsArt">
            <h4>More sermons and prayers from our senior pastor</h4>
            <Row>
              {[...sermonsData]
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((sermon) => (
                  <Col
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    key={sermon.id}
                    className="sermonCol"
                  >
                    <iframe
                      src={sermon.link}
                      title="Sermons and prayer"
                      allowFullScreen
                      allow="autoplay; encrypted-media"
                      style={{ width: "100%", height: "352px" }}
                    />
                    <h6>{sermon.title}</h6>
                    <p style={{ fontSize: "12px", marginTop: "10px" }}>
                      {sermon.description}
                    </p>
                    <p style={{ fontSize: "12px", marginTop: "-10px" }}>
                      Date: {sermon.date}
                    </p>
                  </Col>
                ))}
            </Row>
          </article>
          <article>
            <h4 ref={targetRef} id="musics">
              Music
            </h4>
            <Row className="musicRow">
              <Col xs={12} lg={6} xl={4} className="youtubeImg">
                <iframe
                  width="100%"
                  height="352"
                  src="https://www.youtube.com/embed/qNs3l_Nw4Mo?si=oR5Rc7DTjkAYkKHa&amp;start=5"
                  style={{ borderRadius: 12 }}
                  title="Youtube: MY GOD NO DEY FAIL BY APOSTLE VICTOR S. UWANGUE"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                />
              </Col>
              <Col xs={12} lg={6} xl={4} className="youtubeImg">
                <iframe
                  title="spotify: MY GOD NO DEY FAIL BY APOSTLE VICTOR S. UWANGUE"
                  style={{ borderRadius: 12 }}
                  src="https://open.spotify.com/embed/album/6DuAl7mhGpwA2e8EKQJRXt?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </Col>
              <Col xs={12} xl={4} className="youtubeImg">
                <iframe
                  title="Apple: MY GOD NO DEY FAIL BY APOSTLE VICTOR S. UWANGUE"
                  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                  frameborder="0"
                  height="352"
                  style={{
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: 12,
                  }}
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                  src="https://embed.music.apple.com/us/album/my-god-no-dey-fail-single/1810293834"
                />
              </Col>
            </Row>
          </article>
        </section>
      </section>
    </Container>
  );
}

export default Sermons;
