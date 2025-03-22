import { Button, Container } from "react-bootstrap";
import { PageHeaders } from "./PageHeaders";
import about from "../assest/images/pic1.jpg";
import pastor from "../assest/images/pic3.jpg";

var pageHeader = "Welcome to DLR";
var pageShorty = "...I am the resurrection, and the life... (John 11: 25)";

function About() {
  return (
    <Container fluid className="con">
      <section>
        <PageHeaders
          img={about}
          imgAbout={"About DLR"}
          pageHeader={pageHeader}
          pageShorty={pageShorty}
        />
        <div className="d-flex justify-content-center align-items-center my-3">
          <Button className="buttoned" href="/live">
            Join Us Live
          </Button>
        </div>
        <section className="p-3">
          <article>
            <h4>Our Mission</h4>
            <p>
              At Divine Light of Resurrection (D.L.R.), our mission is to reach
              out to lost souls, break spiritual strongholds, and bring total
              freedom to those suffering under the burdens of life. Through the
              power of Jesus Christ, we wage war against the forces of
              oppression, offering hope, deliverance, and restoration to all who
              seek the light of God{"'"}s resurrection.
            </p>
          </article>
          <article>
            <h4>Our Vision</h4>
            <p>
              Our vision is to see lives transformed and liberated from the
              afflictions of "Calvary"—a place of suffering, stagnation, and
              oppression. We aspire to be a beacon of divine light, leading
              believers into their God-ordained destiny, where they experience
              victory, fruitfulness, and fulfillment in Christ.
            </p>
          </article>
          <article>
            <h4>Statement of Faith(What we believe)</h4>
            <ul>
              <li>
                <strong>God:</strong> Belief in the Trinity (Father, Son and
                Holy Spirit).
              </li>
              <li>
                <strong>Jesus Christ:</strong> Salvation through Jesus Christ.
              </li>
              <li>
                <strong>The Bible:</strong> God{"'"}s inspired and infallible
                word.
              </li>
              <li>
                <strong>Salvation:</strong> Repentance, grace and faith in Jesus
                Christ.
              </li>
              <li>
                <strong>Holy Spirit:</strong> Guidance and empowerment for
                believers.
              </li>
            </ul>
          </article>
          <article className="thePastor text-center">
            <h4 className="text-center pt-5">Meet Our Senior Pastor</h4>
            <div className="d-flex justify-content-center">
              <img
                src={pastor}
                alt="The Pastor of Divine Life of Resurrection"
                className="img-fluid"
              />
            </div>

            <h6 className="text-center fw-bolder pt-3">
              Apostle Victor S. Uwangue
            </h6>
            <p>
              Apostle Victor is the visionary leader and founder of{" "}
              <b>Divine Light of Resurrection (DLR)</b>, a ministry birthed
              through divine inspiration to bring salvation, healing, and
              transformation. With a deep passion for God's Word and a heart for
              souls, he has dedicated his life to preaching the Gospel with
              power, love, and revelation, leading many into a deeper encounter
              with Christ. Through DLR, Apostle Victor has witnessed countless
              miracles, deliverances, and life-changing testimonies, affirming
              God's faithfulness. His commitment to prayer, teaching, and the
              prophetic has made him a vessel of transformation, raising a
              generation of believers who walk in divine purpose, faith, and
              victory.
            </p>
            <h6 className="fw-bolder text-center">
              A Message from our senior pastor
            </h6>
            <p>
              <span>Dear Beloved,</span>
              <br /> I warmly welcome you to Divine Light of Resurrection
              (D.L.R.) is a ministry under the leadership of our Lord Jesus
              Christ, committed to reaching lost souls and engaging in spiritual
              warfare against the forces of darkness.
              <br />
              <br />
              Many believers today find themselves in Calvary—a state of torment
              and affliction. You may be married but unable to conceive,
              educated but struggling with unemployment, or facing persistent
              hardships. These are signs of being in Calvary—a place of
              suffering and delay.
              <br /> <br />
              That is why Divine Light of Resurrection exists—to bring you out
              of spiritual bondage and into total freedom through the
              resurrection power of Jesus Christ. Your deliverance starts here!
              <br />
              <span>{"-"} Apostle Sunny</span>
            </p>
          </article>
        </section>
      </section>
    </Container>
  );
}

export default About;
