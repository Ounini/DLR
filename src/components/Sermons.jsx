import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PageHeaders } from "./PageHeaders";
import sermons from "../assest/images/pic1.jpg";
import { useLocation } from "react-router-dom";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import {BeatLoader} from "react-spinners"

var pageHeader = "Music";
var pageShorty = "Be inspired by God’s Word and uplifting worship.";

function Sermons() {
  const [sermonsData, setSermonsData] = useState([]);
  const [loading, setLoading] = useState(true)
  const targetRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const getVideos = async () => {
      try {
        setLoading(true)
        const q = query(
          collection(db, "videos"),
          orderBy("createdAt", "desc"),
          limit(20),
        );

        const snapshot = await getDocs(q);

        const allVideos = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));

        setSermonsData(allVideos);
        setLoading(false)
      } catch (err) {
        console.error(err);
      }
    };
    getVideos();
  }, []);

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
            {loading ? <BeatLoader /> : (
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
                      src={sermon.embedUrl}
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
                      Date: {new Date(sermon.date).toDateString()}
                    </p>
                  </Col>
                ))}
            </Row>
            )}  
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
                  src="https://www.youtube.com/embed/SgLR52RcIkQ?si=wtA-g8DxXRciZPdW"
                  style={{ borderRadius: 12 }}
                  title="Youtube: MY GOD NO DEY FAIL BY APOSTLE VICTOR S. UWANGUE"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </Col>
              <Col xs={12} lg={6} xl={4} className="youtubeImg">
                <iframe
                  title="spotify: MY GOD NO DEY FAIL BY APOSTLE VICTOR S. UWANGUE"
                  style={{ borderRadius: 12 }}
                  src="https://open.spotify.com/embed/album/6DuAl7mhGpwA2e8EKQJRXt?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </Col>
              <Col xs={12} xl={4} className="youtubeImg">
                <iframe
                  title="Apple: MY GOD NO DEY FAIL BY APOSTLE VICTOR S. UWANGUE"
                  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                  frameBorder="0"
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
