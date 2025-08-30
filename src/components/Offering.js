import { Container, Tab, Tabs } from "react-bootstrap";
import { PageHeaders } from "./PageHeaders";
import offering from "../assest/images/pic1.jpg";
// import Paystack from "../payment/Paystack";

var pageHeader = "Offerings and Tithe";
var pageShorty = "Give and it shall be given unto you";

function Offering() {
  return (
    <Container fluid className="con mb-5">
      <section>
        <PageHeaders
          img={offering}
          imgAbout="Offerings and Tithe"
          pageHeader={pageHeader}
          pageShorty={pageShorty}
        />
        <section>
          <Tabs defaultActiveKey="account" id="tab" className="mb-3">
            <Tab eventKey="account" title="Church Account NOs">
              <article>
                <ul>
                  <li>
                    Zenith Bank: Uwangue Sunday{" "}
                    <strong>4204088589 (Naira)</strong>
                  </li>
                  <li>
                    UBA: Uwangue Victor global venture{" "}
                    <strong>1027809289 (Naira)</strong>
                    <strong>3004680436 (Dollar)</strong>
                    <strong>3004680467 (Euro)</strong>
                    <strong>3004680560 (Pounds)</strong>
                  </li>
                </ul>
              </article>
            </Tab>
            {/* <Tab eventKey="PayStack" title="Pay Using PayStack">
              <Paystack />
            </Tab> */}
          </Tabs>
        </section>
      </section>
    </Container>
  );
}

export default Offering;
