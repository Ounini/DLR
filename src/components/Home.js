import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import pic from "../assest/images/pic3.jpg";
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
  },
  {
    id: 2,
    img: pic,
    text: "Join us in worship today; you are warmly welcome!",
    alt: "join us",
    phase: "A Place of Hope, Love, and Worship.",
    joinText: "Join us live",
    joinUrl: "/live",
    worship: "Worship with us",
    worshipUrl: "/worship",
    class: "caroJoin",
    class2: "caroWorship",
  },
  {
    id: 3,
    img: pic,
    text: "",
    alt: "about",
  },
];

const testimoneyData = [
  {
    id: 1,
    title: "Divine Healing",
    testimoney:
      "For years, I struggled with a chronic illness, and doctors had no solution. But after consistent prayers and trusting God, I received complete healing! I am now stronger and healthier than ever. Truly, God is the Great Physician!",
    name: "Joy A.",
  },
  {
    id: 2,
    title: "Financial Breakthrough",
    testimoney:
      "I was in deep financial struggles, but after faithfully tithing and sowing seeds, God opened unexpected doors. I received a job offer I didn’t even apply for, and my debts were cleared! God is truly my provider",
    name: "Michael O.",
  },
  {
    id: 3,
    title: "Family Restoration",
    testimoney:
      "My family was broken, and we barely spoke to one another. But through prayers and God's intervention, we have been restored. Love, peace, and joy now fill our home. What seemed impossible, God made possible!",
    name: "Esther K.",
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
          <Carousel.Item key={item.id}>
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
              Join us this Sunday at 7 AM (WAT) for a refreshing encounter in
              God's presence!
            </p>
            <p>Prayer and consuelling on Thursdays</p>
            <p>Every Friday intercession and worship at 5pm(WAT)</p>
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
              Tithing and offerings are acts of faith, obedience, and gratitude
              to God. They support the work of the ministry, help those in need,
              and open doors for divine blessings. Malachi 3:10 reminds us that
              when we give, God pours out blessings beyond measure.
            </p>
            <Button href="/offerings" className="mt-2 buttoned">
              Give Offerings
            </Button>
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
