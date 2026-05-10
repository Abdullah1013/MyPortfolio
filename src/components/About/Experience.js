import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { BsBriefcaseFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Iris Labs",
    location: "Remote",
    duration: "March 2026 — Present",
    current: true,
    bullets: [
      "Building scalable backend services using NestJS and TypeScript with modular architecture and dependency injection.",
      "Designing and implementing RESTful APIs with JWT-based authentication and role-based access control.",
      "Creating type-safe DTOs and data models using TypeScript interfaces and class-validator for robust request validation.",
      "Integrating TypeORM with PostgreSQL for structured schema management and efficient relational data querying.",
      "Applying NestJS interceptors, pipes, and exception filters to enforce consistent API behavior and error handling across services.",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "Waywe Gaming",
    location: "Lahore, Pakistan",
    duration: "April 2025 — March 2026",
    current: false,
    bullets: [
      "Developed a full-stack HRM system from scratch with role-based access using React, Node.js, and Sequelize.",
      "Built a game backend with Socket.io & APIs and a React-based dashboard for managing role-based game stats.",
      "Migrated backend to Fly.io and implemented CI/CD pipelines with GitHub Actions.",
      "Integrated deep linking for referrals and Facebook authentication.",
    ],
  },
  {
    role: "MERN Stack Intern",
    company: "A4H",
    location: "Bolton, UK (Remote)",
    duration: "September 2023 — January 2024",
    current: false,
    bullets: [
      "Developed responsive user interfaces using React.js with focus on component reusability and maintainability.",
      "Built backend APIs using Node.js and Express.js for data handling and authentication systems.",
      "Implemented secure authentication systems and optimized application performance.",
      "Worked in agile development environment delivering projects within deadlines while gaining experience in international remote collaboration and project management.",
    ],
  },
];

function Experience() {
  const [active, setActive] = useState(0);

  return (
    <Row style={{ justifyContent: "center", marginTop: "20px", marginBottom: "40px" }}>
      <Col md={10} lg={9}>
        <div className="experience-wrapper">
          {/* Tab selector */}
          <div className="exp-tabs">
            {experiences.map((exp, i) => (
              <button
                key={i}
                className={`exp-tab ${active === i ? "exp-tab-active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="exp-tab-company">{exp.company}</span>
                {exp.current && <span className="exp-current-dot" />}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="exp-content">
            <div className="exp-header">
              <div className="exp-icon-wrap">
                <BsBriefcaseFill className="exp-icon" />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <h3 className="exp-role">{experiences[active].role}</h3>
                  {experiences[active].current && (
                    <span className="exp-badge-current">Current</span>
                  )}
                </div>
                <h5 className="exp-company">{experiences[active].company}</h5>
                <div className="exp-meta">
                  <span>
                    <MdLocationOn style={{ marginRight: "4px" }} />
                    {experiences[active].location}
                  </span>
                  <span>
                    <AiOutlineCalendar style={{ marginRight: "4px" }} />
                    {experiences[active].duration}
                  </span>
                </div>
              </div>
            </div>

            <ul className="exp-bullets">
              {experiences[active].bullets.map((point, i) => (
                <li key={i} className="exp-bullet-item">
                  <span className="exp-bullet-dot" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Experience;
