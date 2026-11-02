import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

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
              isBlog={false}
              title="SwiftPOS"
              description="A cloud-powered multi-tenant SaaS point-of-sale system built for modern retail stores. Features real-time inventory, barcode scanning, profit tracking, thermal receipt printing, a live revenue dashboard, role-based access, and OTP email verification — all deployed on the cloud."
              demoLink="https://swiftpos.pure-syntax.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="AS Traders"
              description="Designed and developed a professional B2B web presence for AS Traders, a 20+ year old chemical and pharmaceutical raw materials supplier based in Lahore. The site features a dynamic hero carousel, a structured product catalog spanning 12+ categories (sweeteners, solvents, acids, polymers, excipients), an industries-served section covering Human Pharma, Food, Beverage, Poultry, and Veterinary sectors, and multi-channel contact integration including WhatsApp. Built with Next.js for performance and scalability."
              demoLink="https://www.astraderspk.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="AI Hospital & Appointment Platform"
              description="Built a hospital appointment and AI triage platform with NestJS, React, Supabase, OpenAI, and RAG. Hospitals configure their own AI bot and knowledge base, then connect patients through Twilio WhatsApp or SMS. Workflows route patients to available specialists and book appointments, with Stripe payments, Zoom consultations, and booking notifications."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Affiliate Marketing App"
              description="Built an affiliate marketing platform with Next.js, NestJS, PostgreSQL, and Stripe. Brands manage campaigns and creators, track post-level insights and reach, and support subscription-based or day-based campaigns with creator payouts through Stripe."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Social Media App"
              description="Contributed to a social media platform using React, Node.js, and Socket.io. Built real-time messaging, video content management for posts, feeds, and communities, and a referral system with earnings."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="PokerFace — Multiplayer Backend"
              description="Built the real-time backend for a multiplayer poker game using Node.js, Socket.io, PostgreSQL, and Sequelize. Implemented game logic, REST APIs, and live game-state synchronization for concurrent players across tables."
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
