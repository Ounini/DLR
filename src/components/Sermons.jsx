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
    title: "Prayer of Liberation",
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
  {
    id: 7,
    title: "Prayer of Liberation",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: God shall show you the secret of your gladness.",
    date: "2025-06-14",
    link: "https://www.youtube.com/embed/FhlNOJZInqs?si=GaMvh1HPJ0sTKnKX",
  },
  {
    id: 8,
    title: "Declaration of redemption",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: May the mercy of God speak for you.",
    date: "2025-06-15",
    link: "https://www.youtube.com/embed/VIQhI0SGigI?si=D07eDmSiAl6NTFhW",
  },
  {
    id: 9,
    title: "Declaration for mercy and favour",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: The set time has come.",
    date: "2025-06-16",
    link: "https://www.youtube.com/embed/P4T4nFqWUOc?si=FzMoOJFAP40z63Bs",
  },
  {
    id: 10,
    title: "Declaration for recovery of glory",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Who touched your garment of glory.",
    date: "2025-06-18",
    link: "https://www.youtube.com/embed/vSq7FgE83vU?si=gApCgXR0OnjVdNcO",
  },
  {
    id: 11,
    title: "Declaration for recovery of glory",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Any good thing that died in your life, be revived back to life. John 11: 25.",
    date: "2025-06-22",
    link: "https://www.youtube.com/embed/zrN94ZOQIQ4?si=cXw6PIUoQL90AyTG",
  },
  {
    id: 12,
    title: "I am not a failure",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Rejoice not against me, my enemies. Micah 7: 8.",
    date: "2025-06-26",
    link: "https://www.youtube.com/embed/zK97IpkGuUk?si=NGq2HYEFoFw8RTsW",
  },
  {
    id: 13,
    title: "No more secret tears",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Be fruitful, Psalm 127: 3.",
    date: "2025-06-27",
    link: "https://www.youtube.com/embed/2JvZTdxAGmE?si=aCpUBJEuHxFUAvFf",
  },
  {
    id: 14,
    title: "God promised safety over your life",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: You are not alone, God is watching over you, Isaiah 49: 15 - 16.",
    date: "2025-06-28",
    link: "https://www.youtube.com/embed/7165GsERfEw?si=YWxXWFYBvsg906De",
  },
  {
    id: 15,
    title: "Declaration of peace",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: You have been committed into the hands of God.",
    date: "2025-06-29",
    link: "https://www.youtube.com/embed/Vc07i5gAalI?si=gNm4Rbz9nzMNkYaw",
  },
  {
    id: 16,
    title: "Declaration of perfection",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: It's your season of perfection, Genesis 2: 2 - 3.",
    date: "2025-07-01",
    link: "https://www.youtube.com/embed/qwjHXJNNflA?si=u_x00k07RQ20qAId",
  },
  {
    id: 17,
    title: "Declaration of no more failures",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: The evil tares in your life is been uprooted, Matthew 13: 25.",
    date: "2025-07-02",
    link: "https://www.youtube.com/embed/16uaQtZTLvU?si=jJ4sf5HiGU_YWzTr",
  },
  {
    id: 18,
    title: "Declaration of strength",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Put on thy beautiful garments, Isaiah 52: 1.",
    date: "2025-07-03",
    link: "https://www.youtube.com/embed/I4hTTUxFixk?si=HBDW6ELy3pq3L7Jn",
  },
  {
    id: 19,
    title: "Declaration of purification",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: O God, purify my foundation, Psalm 11: 3.",
    date: "2025-07-04",
    link: "https://www.youtube.com/embed/rt2o1dgkI3k?si=nLVo_uglQv9YF8Q0",
  },
  {
    id: 20,
    title: "Operation no mercy",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Destroying the power that is ready to destroy you, 2 Kings 3: 27.",
    date: "2025-07-05",
    link: "https://www.youtube.com/embed/DVBnhxMo4FY?si=thyeqQvGY-kw6vr8",
  },
  {
    id: 21,
    title: "Declaration of Favour",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: God is restoring all your wasted years, Joel 2: 25.",
    date: "2025-07-06",
    link: "https://www.youtube.com/embed/qwjHXJNNflA?si=u_x00k07RQ20qAId",
  },
  {
    id: 22,
    title: "Declaration of deliverance",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: You have been committed into the hands of God, Psalms 31: 5.",
    date: "2025-07-07",
    link: "https://www.youtube.com/embed/4eE_2v5xWoM?si=3najaGeIrH6qsLB8",
  },

  {
    id: 23,
    title: "Declaration for restoration of glory",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: You off the garments of slavery, John 11: 44.",
    date: "2025-07-08",
    link: "https://www.youtube.com/embed/0w7ni0FxSbw?si=IsJsAh42KdArf4ME",
  },
  {
    id: 24,
    title: "Declaration for stability",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Destroying the evil horns, Zechariah 1: 18 - 19.",
    date: "2025-07-09",
    link: "https://www.youtube.com/embed/1JSXIG-b0RA?si=Ez5NL0Zf9ZEszv-S",
  },
  {
    id: 25,
    title: "Declaration for safety",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Every death sentence issued against you is cancelled, Jeremiah 1: 19.",
    date: "2025-07-10",
    link: "https://www.youtube.com/embed/-RCH0GDVqCc?si=tTRbx1UWFre2wK7W",
  },
  {
    id: 26,
    title: "Let heaven hear your cry",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Set ablaze any images representing you, Matthew 11: 12.",
    date: "2025-07-11",
    link: "https://www.youtube.com/embed/5oA-fgNNM2s?si=d419DqFXpropp5vw",
  },
  {
    id: 27,
    title: "Stand firmly in the lord",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: You shall not give up, James 4: 7",
    date: "2025-07-12.",
    link: "https://www.youtube.com/embed/RBziQLvieLA?si=RxRG15M_-cPDWbVf",
  },
  {
    id: 28,
    title: "Prayers for deliverance",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Destroyed generational covenant and curses, Matthew 21: 24 - 25.",
    date: "2025-07-14",
    link: "https://www.youtube.com/embed/KRGr3Usk4Hk?si=_9pn7J7Is_wQ5VDS",
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
