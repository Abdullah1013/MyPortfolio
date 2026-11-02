import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiPostgresql,
  SiCplusplus,
  SiBootstrap,
  SiExpress
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
function Techstack() {
  const skillGroups = [
    { title: "AI & Agentic Workflows", skills: "OpenAI API · OpenRouter · RAG · Vector Embeddings · AI Agents · Tool / Function Calling · Prompt Engineering" },
    { title: "Conversational AI & Automation", skills: "Twilio WhatsApp / SMS · Retell Voice AI · n8n · Workflow Automation" },
    { title: "Full Stack Development", skills: "JavaScript · TypeScript · Python · React · Next.js · Node.js · NestJS · Express · Tailwind CSS · Bootstrap" },
    { title: "Data & Real-Time Systems", skills: "PostgreSQL · MySQL · TypeORM · Sequelize · Query Optimization · REST APIs · Socket.io · WebSockets · JWT & RBAC" },
    { title: "Deployment & Delivery", skills: "Docker · Git · GitHub Actions · CI/CD · Fly.io · Vercel · Netlify · Render · Railway" },
  ];
  return (
    <>
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      {skillGroups.map(({ title, skills }) => (
        <Col xs={12} md={6} key={title} className="mb-3">
          <div className="skill-group">
            <h3 className="purple">{title}</h3>
            <p>{skills}</p>
          </div>
        </Col>
      ))}
    </Row>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbApi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
    </Row>
    </>
  );
}

export default Techstack;
