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
    title: "Declarations for greatness",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: August propthetic declarations",
    date: "2025-08-1",
    link: "https://www.youtube.com/embed/gZeZbivD8kY?si=YwxyEZpD6zkyM3RJ",
  },
  {
    id: 2,
    title: "Judgement of God fall upon the wicked",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Powers summoning you in any alters, God shall judge them now",
    date: "2025-08-3",
    link: "https://www.youtube.com/embed/TJeXxtftNq0?si=kIo8QZXuaghks9tY",
  },
  {
    id: 3,
    title:
      "Anything that needs to be destroyed for your glory to shine shall be destroyed",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Your oil and glory shall not run dry",
    date: "2025-08-4",
    link: "https://www.youtube.com/embed/XLt-KicUd8o?si=HNM8q8xb3HOA0MXL",
  },
  {
    id: 4,
    title: "Declarations for recovery",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Capture your glory",
    date: "2025-08-8",
    link: "https://www.youtube.com/embed/xArj4UbjH1Q?si=xoEmHjUf2oRQBHF9",
  },
  {
    id: 5,
    title: "Declarations for freedom",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: You are the light the nations will look up to",
    date: "2025-08-9",
    link: "https://www.youtube.com/embed/XGjPnDPCyGQ?si=xKwtvwyrAtz-xEqB",
  },
  {
    id: 6,
    title: "Prophetic prayers",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: God promise to fight your battles",
    date: "2025-08-11",
    link: "https://www.youtube.com/embed/aQmhUXHyf5s?si=PU4Qo_gOfvzU3tBE",
  },
  {
    id: 7,
    title: "Prophetic for revival",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Your light shall shine to the whole world",
    date: "2025-08-12",
    link: "https://www.youtube.com/embed/qKjONbKDIoU?si=cmGlQtmNet0adebl",
  },
  {
    id: 8,
    title: "Declarations for breaking evil patterns",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: God shall rewrite your history",
    date: "2025-08-14",
    link: "https://www.youtube.com/embed/JOrf78K_qzQ?si=FmfGjDqDYOu7HkW9",
  },
  {
    id: 9,
    title: "Prophetic prayers",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: God shall make you a vessel unto honour.",
    date: "2025-08-16",
    link: "https://www.youtube.com/embed/HDGAFU2_5ck?si=qItKo-gE0V7TdD_O",
  },
  {
    id: 10,
    title: "Declarations for new beginnings",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: God shall do new things in your life.",
    date: "2025-08-18",
    link: "https://www.youtube.com/embed/SE2CDK67mhw?si=k53OVPsjNGPTQ3Va",
  },
  {
    id: 11,
    title: "Prophetic declarations for freedoms",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Any evil covenant troubling yout life is broken today",
    date: "2025-08-21",
    link: "https://www.youtube.com/embed/WdDVLyYtRro?si=3CcwR_888Gv2ZVxd",
  },
  {
    id: 12,
    title: "Prophetic declarations for liberation",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Your battles are over in the name of Jesus",
    date: "2025-08-25",
    link: "https://www.youtube.com/embed/ZzRkJ1mjuE8?si=wyz4imDf_UrgidZs",
  },
  {
    id: 13,
    title: "Prophetic prayers for deliverance",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Don't be troubled, the battles will soon be over",
    date: "2025-08-28",
    link: "https://www.youtube.com/embed/FGdiU7HnjRo?si=0m14VrILtJW72eNs",
  },
  {
    id: 14,
    title: "Prophetic declarations",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: In this ember monnths, you shall not be used to balance evil accounts",
    date: "2025-09-01",
    link: "https://www.youtube.com/embed/ytfyUvKjMRk?si=aHgopFIkOv14pkE-",
  },
  {
    id: 15,
    title: "Declarations for freedom",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Evil patterns is broken, In The Name Of Jesus",
    date: "2025-09-04",
    link: "https://www.youtube.com/embed/rwh1MoMlAZE?si=Ro3wHFQWRd4Us_at",
  },
  {
    id: 16,
    title: "Prophetic declarations",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Any power hunting for your glory shall die",
    date: "2025-09-08",
    link: "https://www.youtube.com/embed/wdKSSEaTCds?si=rKWll9Vua1oI_Auk",
  },
  {
    id: 17,
    title: "You shall see your battles no more",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: You shall not die with your battles",
    date: "2025-09-09",
    link: "https://www.youtube.com/embed/Pp1W1L6puNI?si=mIK90rnIuVVylQR_",
  },
  {
    id: 18,
    title: "Prophetic prayers",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Any porwer adding battles to your battle, shall die with the battles",
    date: "2025-09-12",
    link: "https://www.youtube.com/embed/aAKuWNSsND8?si=P_OThsnvThciA8qa",
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
