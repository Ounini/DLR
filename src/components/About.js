import { Button, Container } from "react-bootstrap";
import { PageHeaders } from "./PageHeaders";
import about from "../assest/images/pic3.png";
import pastor from "../assest/images/pic2.jpg";

var pageHeader = "Welcome to DLR";
var pageShorty =
  "For where two or three gather in my name, there am I with them.";

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
          <article className="thePastor">
            <h4 className="text-center pt-5">Meet Our Senior Pastor</h4>
            <img
              src={pastor}
              alt="The Pastor of Divine Life of Resurrection"
              className="img-fluid"
            />
            <h6 className="text-center fw-bolder pt-3">Apostle Sunny</h6>
            <p>
              Apostle Sunny is a passionate servant of God, dedicated to
              preaching the gospel, transforming lives, and equipping believers
              to fulfill their divine purpose. With a deep love for God{"'"}s
              Word and a strong commitment to prayer, he has been a guiding
              light in leading many to Christ. His ministry is marked by
              powerful teachings, prophetic insights, and a heart for revival.
              Through his leadership, Divine Life Of Resurrection continues to
              impact lives, bringing healing, deliverance, and spiritual growth
              to individuals and families.
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
