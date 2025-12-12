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
    title: "You shall see your battles no more",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: You shall not die with your battles",
    date: "2025-09-09",
    link: "https://www.youtube.com/embed/Pp1W1L6puNI?si=mIK90rnIuVVylQR_",
  },
  {
    id: 2,
    title: "Prophetic prayers",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Any power adding battles to your battle, shall die with the battles",
    date: "2025-09-12",
    link: "https://www.youtube.com/embed/aAKuWNSsND8?si=P_OThsnvThciA8qa",
  },
  {
    id: 3,
    title: "Prophetic prayers",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Any good doors shiut against you is broken open in the name of Jesus",
    date: "2025-09-15",
    link: "https://www.youtube.com/embed/OsBqfoNeuP0?si=GuS-J1oXJd1ceSIH",
  },
  {
    id: 4,
    title: "Declaration of liberation",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Every satanic rearrangement over your life is broken",
    date: "2025-09-16",
    link: "https://www.youtube.com/embed/LbrykmCSOtI?si=d0HmaXyIEyu1yN6K",
  },
  {
    id: 5,
    title: "Declaration of freedom",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Ancestral evil cry over your life, is silenced in the name of Jesus",
    date: "2025-09-18",
    link: "https://www.youtube.com/embed/4FskZel7FOk?si=bv-jKJ0XI_tpjkWL",
  },
  {
    id: 6,
    title: "Prayer for healings",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: You are healed of all manner of sickness and diseases",
    date: "2025-09-23",
    link: "https://www.youtube.com/embed/ZQkLJKA3zEk?si=qGIIBwRLShpFJjoI",
  },
  {
    id: 7,
    title: "Prophetic declarations",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Be promoted in the name of Jesus",
    date: "2025-09-24",
    link: "https://www.youtube.com/embed/gkcbIhytm6w?si=WUnnkdOOq7RoSJnf",
  },
  {
    id: 8,
    title: "Declaration for overcomers",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: You shall not fail",
    date: "2025-09-25",
    link: "https://www.youtube.com/embed/0VE7aMWFNBc?si=FxDCHp0Jwn_ikm66",
  },
  {
    id: 9,
    title: "The value of birthright",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Your birthright shall make a way for you",
    date: "2025-09-26",
    link: "https://www.youtube.com/embed/kLIfASFJPFE?si=_mXj42JTH9j238oG",
  },
  {
    id: 10,
    title: "Declarations for liberation",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Congratulations, the battles has been won",
    date: "2025-09-28",
    link: "https://www.youtube.com/embed/pJNkhQ9zmXc?si=tsblCDOZhPzmWD2H",
  },
  {
    id: 11,
    title: "Prophetic Declarations",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Come out of any pit you are in, in the name of Jesus",
    date: "2025-10-9",
    link: "https://www.youtube.com/embed/D_Y5jOTm2KM?si=VPcm3EADfRDS2BOI",
  },
  {
    id: 12,
    title: "Prophetic Declarations",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Whoever is carrying evil sacrifice against you shall go down",
    date: "2025-11-17",
    link: "https://www.youtube.com/embed/ZoR89iKHcbw?si=Q1MeSDnXXGB43Rvp",
  },
  {
    id: 13,
    title: "Prophetic Declarations",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Powers using your case to settle their evil differences shall die",
    date: "2025-11-24",
    link: "https://www.youtube.com/embed/sb6F5rehjNM?si=hV4z_RAZ8pdVD6Dr",
  },
  {
    id: 14,
    title: "Prayers for Recovery",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: The blessings of the remaining days of the year, you shall posses",
    date: "2025-11-25",
    link: "https://www.youtube.com/embed/Rq_MYsYXvK8?si=YwHW2PD-y0lqpSLN",
  },
  {
    id: 15,
    title: "Libration Prophecy",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: As far their journey is not of the Lord, they shall go down",
    date: "2025-11-26",
    link: "https://www.youtube.com/embed/CCcz-FQDqyE?si=qWnDQjPyJUzUIyfJ",
  },
  {
    id: 16,
    title: "Prophetic Declarations",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Where you supposed to be rejected, the unmerited favour of God shall qualify you",
    date: "2025-11-28",
    link: "https://www.youtube.com/embed/XzuAV0mpRaA?si=E5tDSoTJ1OTqJF1s",
  },
  {
    id: 17,
    title: "Morning prayers",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: Any battles assigned to ridicule your life shall become a stepping stone to your greatness",
    date: "2025-11-29",
    link: "https://www.youtube.com/embed/D_Y5jOTm2KM?si=VPcm3EADfRDS2BOI",
  },
  {
    id: 18,
    title: "Phophetic Declarations",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: The evil sacrifice of your enemies shall hunt them",
    date: "2025-12-01",
    link: "https://www.youtube.com/embed/nm1eao8zUGk?si=pRF_9sjWPz38iyW0",
  },
  {
    id: 19,
    title: "Prayers of Freedom",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: The grip of bad dreams, manifesting in your life is broken in the name of Jesus",
    date: "2025-12-03",
    link: "https://www.youtube.com/embed/W7qlwjo9Vnc?si=iawhRXALBuKJ4vB5",
  },
  {
    id: 20,
    title: "Prophectic Prayers for spiritual awakening",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: You shall not fade, you shall not expire in the name of Jesus Christ",
    date: "2025-12-05",
    link: "https://www.youtube.com/embed/MW2L5abedq4?si=eWk-YdqTSIeok2xx",
  },
  {
    id: 21,
    title: "Prophetic Declarations",
    description:
      "Today's Prayer by Apostle Victor Samuel Uwangue. Title: I say no to disappointment, in the name of Jesus",
    date: "2025-12-09",
    link: "https://www.youtube.com/embed/3d4v6bhU5Mw?si=GKxv00gcLwc9Nkos",
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
