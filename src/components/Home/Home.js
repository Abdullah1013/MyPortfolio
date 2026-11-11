import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/profilepic-shorthair-v2.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name">Abdullah Khan</strong>
              </h1>

              <div className="type-wrapper">
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="home-pic-col">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid home-pic"
                style={{ maxHeight: "450px" }}
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
