import { Container } from "react-bootstrap";
import ministry from "../assest/images/pic3.png";
import { PageHeaders } from "./PageHeaders";

var pageHeader = "The Ministry";
var pageShorty =
  "Go into all the world and preach the gospel to every creature.";

function Ministry() {
  return (
    <Container fluid className="con">
      <section>
        <PageHeaders
          img={ministry}
          imgAbout={"History of the Ministry"}
          pageHeader={pageHeader}
          pageShorty={pageShorty}
        />
        <article className="p-3">
          <h4>The History Of DLR</h4>
          <p>
            Founded in 2022 by Apostle Sunny, Divine Life of Resurrection began
            as a small gathering of passionate believers united by a deep hunger
            for God's presence. What started in a humble setting quickly grew
            into a thriving community as more lives were touched by the
            transforming power of the gospel. Through unwavering faith, fervent
            prayer, and a commitment to spreading God{"'"}s Word, the ministry
            expanded, reaching beyond its initial congregation.
            <br />
            <img src={ministry} alt="ministry" className="img-fluid my-3" />
            <br /> Over the years, Divine Life of Resurrection has become a
            beacon of hope, offering impactful worship services, outreach
            programs, and discipleship initiatives. Through city-wide
            evangelism, charity missions, and powerful teachings, the church
            continues to equip believers, restore broken lives, and ignite
            revival in hearts. With a vision for global impact, we remain
            steadfast in our mission to raise a generation deeply rooted in
            faith, love, and the power of the Holy Spirit.
          </p>
        </article>
      </section>
    </Container>
  );
}

export default Ministry;
