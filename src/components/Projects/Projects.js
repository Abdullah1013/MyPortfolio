import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import swiftPOS from "../../Assets/Projects/swift-pos.jpg";
import pureSyntaxWeb from "../../Assets/Projects/pure-syntax-web.png";
import asTraders from "../../Assets/Projects/astraders.jpg";

function Projects() {
  const navigate = useNavigate();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swiftPOS}
              isBlog={false}
              title="SwiftPOS"
              description="A cloud-powered multi-tenant SaaS point-of-sale system built for modern retail stores. Features real-time inventory, barcode scanning, profit tracking, thermal receipt printing, a live revenue dashboard, role-based access, and OTP email verification — all deployed on the cloud."
              demoLink="https://swiftpos.pure-syntax.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              imgPath={asTraders}
              title="AS Traders"
              description="Designed and developed a professional B2B web presence for AS Traders, a 20+ year old chemical and pharmaceutical raw materials supplier based in Lahore. The site features a dynamic hero carousel, a structured product catalog spanning 12+ categories (sweeteners, solvents, acids, polymers, excipients), an industries-served section covering Human Pharma, Food, Beverage, Poultry, and Veterinary sectors, and multi-channel contact integration including WhatsApp. Built with Next.js for performance and scalability."
              demoLink="https://www.astraderspk.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              imgPath={pureSyntaxWeb}
              title="PureSyntax — Company Portfolio"
              description="Designed and developed the official portfolio website for PureSyntax, a full-service digital agency. The site showcases services across Web, Mobile, and Game Development with a fully responsive multi-section layout — including a hero, services breakdown, live project portfolio with case studies, six core commitments, and a 24/7 contact section. Built to reflect the agency's identity: clean, scalable, and client-focused."
              demoLink="https://www.pure-syntax.com"
            />
          </Col>
        </Row>

        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <h3 style={{ color: "white", marginBottom: "10px" }}>
            Want to see where it all <strong className="purple">began?</strong>
          </h3>
          <p style={{ color: "rgb(155 126 172)", marginBottom: "20px" }}>
            Check out my learning phase projects — the starting point of my development journey.
          </p>
          <Button
            variant="primary"
            onClick={() => navigate("/learning")}
            style={{ padding: "10px 30px", fontSize: "1em" }}
          >
            My Learning Journey
          </Button>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
