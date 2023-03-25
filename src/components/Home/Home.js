import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/WBR1_C.png";
import bg from "../../Assets/peakpx1.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
      {/* <image ={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", opacity:"15%" }}> */}
      <script src="particles.js"></script>
      
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {"skoot in style "}
                {/* <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> */}
              </h1>

              <h1 className="heading-name">
                
                <strong className="main-name"></strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                // style={{ maxHeight: "900px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
