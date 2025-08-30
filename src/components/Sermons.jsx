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
    title: "Declaration for restoration of glory",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: You off the garments of slavery, John 11: 44.",
    date: "2025-07-08",
    link: "https://www.youtube.com/embed/0w7ni0FxSbw?si=IsJsAh42KdArf4ME",
  },
  {
    id: 2,
    title: "Declaration for stability",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Destroying the evil horns, Zechariah 1: 18 - 19.",
    date: "2025-07-09",
    link: "https://www.youtube.com/embed/1JSXIG-b0RA?si=Ez5NL0Zf9ZEszv-S",
  },
  {
    id: 3,
    title: "Declaration for safety",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Every death sentence issued against you is cancelled, Jeremiah 1: 19.",
    date: "2025-07-10",
    link: "https://www.youtube.com/embed/-RCH0GDVqCc?si=tTRbx1UWFre2wK7W",
  },
  {
    id: 4,
    title: "Let heaven hear your cry",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Set ablaze any images representing you, Matthew 11: 12.",
    date: "2025-07-11",
    link: "https://www.youtube.com/embed/5oA-fgNNM2s?si=d419DqFXpropp5vw",
  },
  {
    id: 5,
    title: "Stand firmly in the lord",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: You shall not give up, James 4: 7",
    date: "2025-07-12.",
    link: "https://www.youtube.com/embed/RBziQLvieLA?si=RxRG15M_-cPDWbVf",
  },
  {
    id: 6,
    title: "Prayers for deliverance",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Destroyed generational covenant and curses, Matthew 21: 24 - 25.",
    date: "2025-07-14",
    link: "https://www.youtube.com/embed/KRGr3Usk4Hk?si=_9pn7J7Is_wQ5VDS",
  },
  {
    id: 7,
    title: "God attending to your needs",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: You shall learn how to cry to God in all situations, Psalm 30: 2.",
    date: "2025-07-21",
    link: "https://www.youtube.com/embed/D6Ok0PufmEI?si=Vk68usbkLWd8HEB7",
  },
  {
    id: 8,
    title: "Declarations for making wealth",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Possess your possessions, Obadiah 1: 17",
    date: "2025-07-22",
    link: "https://www.youtube.com/embed/6dnfrQAjBc8?si=29Z2frFarQ3vudQJ",
  },
  {
    id: 9,
    title: "Declarations for operation no mercy for the wicked",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Break to pieces very evil associate, Isaiah 8: 9",
    date: "2025-07-23",
    link: "https://www.youtube.com/embed/KemJsGgUqO0?si=2fNkE1y3XYNgw8BI",
  },
  {
    id: 10,
    title: "God fulfilling His promise",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Afflictions shall not rise up again, Nahum 1: 9",
    date: "2025-07-26",
    link: "https://www.youtube.com/embed/fn9K22jO_YA?si=n9lq-3S1iPiVUd2e",
  },
  {
    id: 11,
    title: "Prophetic prayers to recover glory",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Your riches that have been swallowed shall be vomited, Job 20: 15",
    date: "2025-07-27",
    link: "https://www.youtube.com/embed/QPDPt-VGdiY?si=twTxRlNJg4lMWlX3",
  },
  {
    id: 12,
    title: "Prophetic declarations",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: The evil water have been converted to blood of Jesus, Job 20: 15",
    date: "2025-07-29",
    link: "https://www.youtube.com/embed/JsH3OTv4MAU?si=VIIm1554T1YbFkUp",
  },
  {
    id: 13,
    title: "Prophetic prayers for victory",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: You shall not die, Psalm 118: 17",
    date: "2025-07-30",
    link: "https://www.youtube.com/embed/_4Bm60OZrdQ?si=uI95nrgVrt1gVBiZ",
  },
  {
    id: 14,
    title: "Declarations for greatness",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: August propthetic declarations",
    date: "2025-08-1",
    link: "https://www.youtube.com/embed/gZeZbivD8kY?si=YwxyEZpD6zkyM3RJ",
  },
  {
    id: 15,
    title: "Judgement of God fall upon the wicked",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Powers summoning you in any alters, God shall judge them now",
    date: "2025-08-3",
    link: "https://www.youtube.com/embed/TJeXxtftNq0?si=kIo8QZXuaghks9tY",
  },
  {
    id: 16,
    title:
      "Anything that needs to be destroyed for your glory to shine shall be destroyed",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Your oil and glory shall not run dry",
    date: "2025-08-4",
    link: "https://www.youtube.com/embed/XLt-KicUd8o?si=HNM8q8xb3HOA0MXL",
  },
  {
    id: 17,
    title: "Declarations for recovery",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Capture your glory",
    date: "2025-08-8",
    link: "https://www.youtube.com/embed/xArj4UbjH1Q?si=xoEmHjUf2oRQBHF9",
  },
  {
    id: 18,
    title: "Declarations for freedom",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: You are the light the nations will look up to",
    date: "2025-08-9",
    link: "https://www.youtube.com/embed/XGjPnDPCyGQ?si=xKwtvwyrAtz-xEqB",
  },
  {
    id: 19,
    title: "Prophetic prayers",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: God promise to fight your battles",
    date: "2025-08-11",
    link: "https://www.youtube.com/embed/aQmhUXHyf5s?si=PU4Qo_gOfvzU3tBE",
  },
  {
    id: 20,
    title: "Prophetic for revival",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Your light shall shine to the whole world",
    date: "2025-08-12",
    link: "https://www.youtube.com/embed/qKjONbKDIoU?si=cmGlQtmNet0adebl",
  },
  {
    id: 21,
    title: "Declarations for breaking evil patterns",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: God shall rewrite your history",
    date: "2025-08-14",
    link: "https://www.youtube.com/embed/JOrf78K_qzQ?si=FmfGjDqDYOu7HkW9",
  },
  {
    id: 22,
    title: "Prophetic prayers",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: God shall make you a vessel unto honour.",
    date: "2025-08-16",
    link: "https://www.youtube.com/embed/HDGAFU2_5ck?si=qItKo-gE0V7TdD_O",
  },
  {
    id: 23,
    title: "Declarations for new beginnings",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: God shall do new things in your life.",
    date: "2025-08-18",
    link: "https://www.youtube.com/embed/SE2CDK67mhw?si=k53OVPsjNGPTQ3Va",
  },
  {
    id: 24,
    title: "Prophetic declarations for freedoms",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Any evil covenant troubling yout life is broken today",
    date: "2025-08-21",
    link: "https://www.youtube.com/embed/WdDVLyYtRro?si=3CcwR_888Gv2ZVxd",
  },
  {
    id: 25,
    title: "Prophetic declarations for liberation",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Your battles are over in the name of Jesus",
    date: "2025-08-25",
    link: "https://www.youtube.com/embed/ZzRkJ1mjuE8?si=wyz4imDf_UrgidZs",
  },
  {
    id: 26,
    title: "Prophetic prayers for deliverance",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Don't be troubled, the battles will soon be over",
    date: "2025-08-28",
    link: "https://www.youtube.com/embed/FGdiU7HnjRo?si=0m14VrILtJW72eNs",
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
