import { Container } from "react-bootstrap";
import ministry from "../assest/images/pic1.jpg";
import ministry2 from "../assest/images/pic4.jpg";
import logo from "../assest/images/logo.png";
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
        <article className="p-3 ministries">
          <h4>
            The History Of Divine Light of Resurrection Ministries (D.L.R.)
          </h4>
          <p>
            <b>Divine Light of Resurrection Ministries (D.L.R.)</b> is a
            ministry founded under the divine mandate of Jesus Christ, dedicated
            to delivering souls from bondage, restoring lost destinies, and
            manifesting the power of God through signs and wonders.
            <br />
            The vision of <b>D.L.R.</b> was birthed through Apostle Victor
            Samuel Uwangue, who was called by God into ministry in the year{" "}
            <b>2018</b>. Though many had referred to him as “Pastor” as early as{" "}
            <b>2008</b>, he had no understanding of this divine calling at the
            time. He was simply a devoted Christian who loved serving God.
            <img
              src={ministry2}
              alt="ministry"
              className="img-fluid mx-auto my-3 d-block"
            />
            <br /> The first sign of his anointing came in <b>2010</b>, when he
            visited his elder sister before traveling abroad. Her child was
            severely sick, and after failed medical interventions, doctors
            recommended traditional medicine. However, moved by the Holy Spirit,
            Apostle Victor prayed for the child in <b>the name of Jesus,</b> and
            immediately, the baby fell into a peaceful sleep, healed completely.
            His sister, amazed by the miracle, declared,{" "}
            <b>"Go and become a pastor—you are a pastor!"</b>
            <br /> Despite this encounter, it was not until <b>2018</b> that God
            Himself called Apostle Victor into full-time ministry. Since then,
            the Lord has been revealing His mighty power through <b>D.L.R.</b>,
            changing lives, breaking yokes, and bringing{" "}
            <b>restoration to those in need.</b>
          </p>
        </article>
        <article className="p-3 theLogo">
          <h4>The Logo</h4>
          <div className="text-center">
            <img src={logo} alt="The Logo" />
          </div>
          <p>
            <b>Oxblood</b>
            <br />
            Oxblood is more than a deep, rich hue—it signifies power,
            sophistication, and a sense of luxury. It's a color that evokes
            strength, timeless elegance, and a bold presence.
            <br />
            <b>Rainbow</b>
            <br />
            The rainbow stands as a universal symbol of hope, renewal, and the
            promise of better days. Its meaning is rooted in divine assurance,
            as seen in the book of Genesis 9: 11-16, <br />{" "}
            <i>
              "And I will establish my covenant with you, neither shall all
              flesh be cut off any more by the waters of a flood; neither shall
              there any more be a flood to destroy the earth.
              <br />
              And God said, This is the token of the covenant which I make
              between me and you and every living creature that is with you, for
              perpetual generations:
              <br />
              I do set my bow in the cloud, and it shall be for a token of a
              covenant between me and the earth.
              <br />
              And it shall come to pass, when I bring a cloud over the earth,
              that the bow shall be seen in the cloud:
              <br />
              And I will remember my covenant, which is between me and you and
              every living creature of all flesh; and the waters shall no more
              become a flood to destroy all flesh.
              <br />
              And the bow shall be in the cloud; and I will look upon it, that I
              may remember the everlasting covenant between God and every living
              creature of all flesh that is upon the earth."
            </i>
            <br />
            This passage reminds us of God's everlasting covenant—a divine
            promise of mercy and protection that endures through all
            generations.
          </p>
        </article>
      </section>
    </Container>
  );
}

export default Ministry;
