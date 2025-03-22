import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import pic from "../assest/images/pic2.jpg";
import pic2 from "../assest/images/pic5.jpg";
import pic3 from "../assest/images/pic7.jpg";
import youtubeListen from "../assest/images/youtube.png";
import spotifyListen from "../assest/images/spotify.png";

const caroData = [
  {
    id: 1,
    img: pic,
    text: "Welcome to Divine Light Of Resurrection ",
    alt: "welcome",
    phase: '"A Place of Hope, Love, and Worship."',
    joinText: "Join us live",
    joinUrl: "/live",
    worship: "Worship with us",
    worshipUrl: "/worship",
    class: "caroJoin",
    class2: "caroWorship",
    className: "caro1",
  },
  {
    id: 2,
    img: pic2,
    text: "Experience God's Presence",
    alt: "join us",
    phase:
      '"Join us live every Sunday at 7:00 AM & Thursdays at 4:00 PM (WAT)"',
    joinText: "Join us live",
    joinUrl: "/live",
    worship: "Worship with us",
    worshipUrl: "/worship",
    class: "caroJoin",
    class2: "caroWorship",
    className: "caro2",
  },
  {
    id: 3,
    img: pic3,
    text: "Miracles, Signs & Wonders Await You!",
    phase: '"Be part of our spirit-filled gatherings."',
    alt: "about",
    className: "caro3",
  },
];

const testimoneyData = [
  {
    id: 1,
    title: "Divine Healing and Deliverance from Sickness",
    testimoney: (
      <>
        Before Apostle Victor fully embraced his calling, he witnessed a miracle
        that confirmed God's power in his life.
        <br /> In <b>2010</b>, during a visit to his elder sister{"'"}s house,
        he found her <b>young son severely sick—restless</b>, unable to sleep,
        and beyond medical help. Doctors had given up and recommended
        traditional treatment.
        <br /> Moved by compassion,{" "}
        <b>
          Apostle Victor lifted the child in his arms and declared with
          authority:
        </b>
        <br />{" "}
        <i className="italic">
          "You sickness, I don{"'"}t care about your name or how long you have
          stayed in this body. In the name of Jesus, I command you to leave
          now!"
        </i>
        <br /> Immediately, the <b>child fell asleep peacefully</b> in his arms.
        His sister, overwhelmed by the miracle, repeatedly declared,{" "}
        <b>"Go and become a pastor—you are a pastor!"</b>
        <br />
        This moment was a turning point, revealing the divine anointing upon
        Apostle Victor{"'"}s life.
      </>
    ),
    name: "Apostle Victor's Nephew",
  },
  {
    id: 2,
    title: "Divine Healing After a Spiritual Attack",
    testimoney: (
      <>
        Brother Prosper, a devoted believer studying in a pastoral school,
        encountered a spiritual attack after participating in a church ritual
        known as the <b>“washing of feet.”</b> Upon returning home, he felt a
        sudden numbness in his right leg, followed by unbearable pain and
        swelling. Out of fear of judgment, he kept silent, enduring the
        suffering.
        <br /> On <b>Monday</b>, he visited Apostle Victor's office and narrated
        his ordeal. Apostle Victor reminded him of{" "}
        <b>
          Hebrews 13:8—"Jesus Christ is the same yesterday, today, and forever."
        </b>{" "}
        He then prayed for Brother Prosper in the <b>name of Jesus Christ.</b>{" "}
        Immediately, the pain disappeared, and he was completely healed.
        <br />
        <br />{" "}
        <i className="italic">
          "He sent His word and healed them and delivered them from their
          destruction."
        </i>{" "}
        — Psalm 107:20
      </>
    ),
    name: "Brother Prosper",
  },
  {
    id: 3,
    title: "Divine Restoration of Marriage Destiny",
    testimoney: (
      <>
        At <b>45 years old</b>, Sister Juliet had never been married. She had
        lived a life of purity and dedication to God but could not understand
        why marriage eluded her. Frustrated and desperate, she came to{" "}
        <b>D.L.R.</b> and shared her burden with Apostle Victor.
        <br /> He encouraged her with
        <b>faith-filled prayers,</b> and together, they embarked on{" "}
        <b>midnight intercessory prayers</b> from <b>12 AM to 2 AM</b> every
        night. After just two weeks, Sister Juliet called Apostle Victor with an
        incredible testimony:
        <b>three men had proposed to her for marriage.</b>
        <br /> Today, Sister Juliet is happily married and living in the
        fullness of God’s promise.
        <br />
        <br />{" "}
        <i className="italic">
          "Jesus said, 'I am the resurrection and the life. He that believeth in
          me, though he were dead, yet shall he live.'" — John 11:25
        </i>
      </>
    ),
    name: "Sister Juliet",
  },
];

function Home() {
  const navigate = useNavigate();

  const goToTarget = () => {
    navigate("/resources#musics");
  };

  return (
    <Container fluid className="px-0 homeCaro">
      <Carousel className="firstCaro">
        {caroData.map((item) => (
          <Carousel.Item className={item.className} key={item.id}>
            <img
              className="d-block mx-auto"
              src={item.img}
              alt={`${item.alt}`}
            />
            <Carousel.Caption className="caroCap">
              <h3>{item.text}</h3>
              <p className="caroPhase">{item.phase}</p>
              <div className="caroBtn">
                <Link className={item.class} to={item.joinUrl}>
                  {item.joinText}
                </Link>
                <Link className={item.class2} to={item.worshipUrl}>
                  {item.worship}
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Row>
        <Col sm={12} lg={6}>
          <section className="sectionServices">
            <h4>About Us</h4>
            <p>
              D.L.R. (Divine Light of Resurrection) is a Christ-led ministry
              dedicated to rescuing lost souls and waging spiritual warfare
              against forces of oppression. Many believers today experience
              "Calvary"—a place of suffering, where struggles like
              childlessness, joblessness, and stagnation persist. D.L.R. is here
              to bring total freedom through the power of Jesus Christ.
            </p>
            <Button href="/about-us" className="mt-2 buttoned">
              About Us
            </Button>
          </section>
        </Col>
        <Col sm={12} lg={6}>
          <section className="sectionServices">
            <h4>Online Services</h4>
            <p>
              Join us for a life-changing encounter in God's presence! Our
              online services are held every Sunday at 7:00 AM (WAT) and every
              Thursday at 4:00 PM (WAT). Come expectant, and be blessed as we
              worship, pray, and receive divine revelation. Don't miss it!
            </p>
            <div>
              <Link target="_blank" to="https://facebook.com">
                <i className="bi bi-facebook" />
              </Link>
              <Link target="_blank" to="https://youtube.com">
                <i className="bi bi-youtube text-danger" />
              </Link>
            </div>
            <Button href="/live" className="mt-2 buttoned">
              Join Us Live
            </Button>
          </section>
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={6}>
          <section className="sectionServices">
            <h4>listen to sermons and music from our leading pastor</h4>
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
            </Row>
            <Button onClick={goToTarget} className="mt-2 buttoned">
              Watch or Listen Now
            </Button>
          </section>
        </Col>
        <Col sm={12} lg={6}>
          <section className="sectionServices">
            <h4>Upcoming Programmes</h4>
            <p>2nd March 2025: Thanksgiving Sunday.</p>
            <p>9th March 2025: Combined Service.</p>
            <p>16th March 2025: Testimoney Service.</p>
            <p>23rd March 2025: Combined Service</p>
            <p>30th March 2025: Communion Service</p>
            <div className="programmeHome">
              For Special Announcement and More like the Link below...
            </div>
            <Button href="/programmes" className="mt-2 buttoned">
              See All Programmes
            </Button>
          </section>
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={6}>
          <section className="sectionServices">
            <h4>Offerings and Tithes</h4>
            <p>
              Your tithes and offerings are a seed sown into God's kingdom. As
              you give, may you experience divine provision, open doors, and
              abundant blessings. Give cheerfully and watch God do wonders in
              your life! (2 Corinthians 9:7)
            </p>
            <Button href="/offerings" className="mt-2 buttoned">
              Give Offerings
            </Button>
          </section>
        </Col>
        <Col sm={12} lg={6}>
          <section className="sectionServices">
            <h4>A Call to Restoration</h4>
            <p>
              At Divine Light of Resurrection (D.L.R.), we believe that God is
              still in the business of restoring lost destinies, healing the
              sick, and breaking every yoke of oppression.
              <br /> Pray this prayer with us:
              <br />{" "}
              <i className="italic">
                "My Father, arise on my behalf! Let the glort that I have lost
                locate me in the name of Jesus!"
              </i>
              <br /> Whatever has been stolen from your life—your{" "}
              <b>marriage, career, health, or purpose</b>—God will restore it
              through <b>faith and prayer.</b>
              <br /> <br /> <b>Join us and experience divine transformation!</b>
            </p>
          </section>
        </Col>
      </Row>
      <section className="sectionServices testimoneySec text-center d-flex flex-column align-items-center">
        <div className="testimony-carousel-wrapper">
          <h4>Testimoney</h4>
          <Carousel fade className="test">
            {testimoneyData.map((test) => (
              <Carousel.Item
                interval="10000"
                className="testCaro"
                key={test.id}
              >
                <h5>{test.title}</h5>
                <p>{test.testimoney}</p>
                <span>~{test.name}</span>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
    </Container>
  );
}

export default Home;
