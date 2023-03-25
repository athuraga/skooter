import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/WBR-Us.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              -------- <span className="purple"> ---- </span> -----------
            </h1>
            <p className="home-about-body">
             ------------------------------
              <br />
              <br />---------
              <i>
                <b className="purple"> ------ </b>
              </i>
              <br />
              <br />
              ------------- &nbsp;
              <i>
                <b className="purple">------------- </b> and
              -------------{" "}
                <b className="purple">
                 ---------------
                </b>
              </i>
              <br />
              <br />
........                <b className="purple">-----</b> and
              <i>
                <b className="purple">
                  {" "}
----------
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> ------------</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>---------</h1>
            <p>
             ------<span className="purple">---- </span>----------
            </p>
            {/* <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/skooter4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/skooter4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/skooter4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/skooter4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
