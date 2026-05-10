import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I love building things that live on the internet — from SaaS platforms to
            real-time systems. As Co-Founder &amp; CTO of{" "}
            <a href="https://www.pure-syntax.com" target="_blank" rel="noreferrer" className="purple" style={{ fontWeight: "bold", textDecoration: "none" }}>PureSyntax</a>, I turn ideas into scalable digital products.
              <br />
              <br />I am fluent in
              <i>
                <b className="purple"> HTML, CSS, JavaScript, TypeScript </b>
              </i>
              and the full modern web stack.
              <br />
              <br />
              My primary focus is building{" "}
              <i>
                <b className="purple">Full Stack Web Applications </b>
              </i>
              with clean architecture, real-time capabilities, and cloud deployments — always
              pushing toward{" "}
              <b className="purple">scalable, production-ready solutions.</b>
              <br />
              <br />
              I build backends with <b className="purple">NestJS &amp; Node.js</b> and
              craft frontends with{" "}
              <i>
                <b className="purple">Next.js &amp; React.js</b>
              </i>{" "}
              — backed by <b className="purple">PostgreSQL</b> and deployed on the cloud.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <div className="code-card">
              <div className="code-card-header">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
                <span className="code-card-title">abdullah.js</span>
              </div>
              <div className="code-card-body">
                <p><span className="cc-keyword">const</span> <span className="cc-var">developer</span> <span className="cc-op">=</span> {"{"}</p>
                <p>&nbsp;&nbsp;<span className="cc-key">name</span>: <span className="cc-str">"Abdullah Khan"</span>,</p>
                <p>&nbsp;&nbsp;<span className="cc-key">role</span>: <span className="cc-str">"CTO & Full Stack Dev"</span>,</p>
                <p>&nbsp;&nbsp;<span className="cc-key">stack</span>: [</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="cc-str">"Next.js"</span>, <span className="cc-str">"NestJS"</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="cc-str">"React"</span>, <span className="cc-str">"PostgreSQL"</span></p>
                <p>&nbsp;&nbsp;],</p>
                <p>&nbsp;&nbsp;<span className="cc-key">available</span>: <span className="cc-bool">true</span>,</p>
                <p>{"}"}<span className="cc-cursor">▋</span></p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Abdullah1013"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Mr_pathan0?s=08"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdullah-khan-126122227"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/abdullah.khan.niazi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
