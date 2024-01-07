import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wordSearch from "../../Assets/Projects/Word-search.png";
import diceGame from "../../Assets/Projects/Dice_Game.png";
import tinDog from "../../Assets/Projects/Tindog.png";
import ecomerce from "../../Assets/Projects/E-commerce.png";


import packagingRack from "../../Assets/Projects/Pacakaging_Rack.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tinDog}
              isBlog={false}
              title="TinDog"
              description="wwwwwwwwwwwwwwww"
              ghLink="https://github.com/Abdullah1013/First-website-structure"
              demoLink="https://abdullah1013.github.io/First-website-structure/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomerce}
              isBlog={false}
              title="E-commerce"
              description="wwwwwwwwwwwww"
              ghLink="https://github.com/Abdullah1013/First-e-commerice-web"
              demoLink="https://abdullah1013.github.io/First-e-commerice-web/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={packagingRack}
              isBlog={false}
              title="Packaging Rack"
              description="wwwwwwwwwwww"
              ghLink="https://github.com/Abdullah1013/My-pacakaging-rack"
              demoLink="https://abdullah1013.github.io/My-pacakaging-rack/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diceGame}
              isBlog={false}
              title="Dice Game"
              description="wwwwwwwwwww"
              ghLink="https://github.com/Abdullah1013/dice_game"
              demoLink="https://abdullah1013.github.io/dice_game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordSearch}
              isBlog={false}
              title="Word Search Game"
              description="wwwwwwwwwww"
              ghLink="https://github.com/Abdullah1013/Word_search_game"
             demoLink="https://www.linkedin.com/posts/abdullah-khan-126122227_word-puzzle-game-using-c-second-semester-activity-6961743209379061760--Zov?utm_source=share&utm_medium=member_desktop" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
