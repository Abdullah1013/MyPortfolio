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
              I am a <b className="purple">Full Stack &amp; AI Application Developer</b>
              {" "}building production web applications, conversational agents, and automated workflows.
              <br /><br />
              I build frontends with <b className="purple">React &amp; Next.js</b> and
              {" "}backends with <b className="purple">Node.js, NestJS &amp; TypeScript</b>,
              backed by PostgreSQL and real-time APIs.
              <br /><br />
              My AI work includes <b className="purple">RAG pipelines, vector embeddings,
              LLM tool calling, and AI agents</b> using OpenAI and OpenRouter.
              <br /><br />
              I connect AI to real workflows through <b className="purple">Twilio WhatsApp/SMS,
              Retell voice agents, and n8n automation</b>, taking features from database
              design through deployment and CI/CD.
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
                <p>&nbsp;&nbsp;<span className="cc-key">role</span>: <span className="cc-str">"Full Stack & AI Developer"</span>,</p>
                <p>&nbsp;&nbsp;<span className="cc-key">stack</span>: [</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="cc-str">"Next.js"</span>, <span className="cc-str">"NestJS"</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="cc-str">"React"</span>, <span className="cc-str">"PostgreSQL"</span></p>
                <p>&nbsp;&nbsp;],</p>
                <p>&nbsp;&nbsp;<span className="cc-key">focus</span>: <span className="cc-str">"RAG & AI Agents"</span>,</p>
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
