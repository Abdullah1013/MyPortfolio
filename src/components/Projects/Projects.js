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
              description="Demonstrated Bootstrap proficiency in Tindog clone, excelling in
               responsive design and CSS styling. Seamless cross-device experience highlights 
               technical prowess and creative finesse, showcasing a dedication to web development excellence."
              ghLink="https://github.com/Abdullah1013/First-website-structure"
              demoLink="https://abdullah1013.github.io/First-website-structure/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomerce}
              isBlog={false}
              title="E-commerce"
              description="Crafted an engaging e-commerce site, leveraging jQuery,
               JavaScript, and Bootstrap for responsiveness. Enriched user experience 
               with dynamic animations, showcasing a blend of technical innovation and design
                finesse. Explore the project to witness seamless functionality and a visually 
                appealing online shopping experience"
              ghLink="https://github.com/Abdullah1013/First-e-commerice-web"
              demoLink="https://abdullah1013.github.io/First-e-commerice-web/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={packagingRack}
              isBlog={false}
              title="Packaging Rack"
              description="Delivered a responsive website for a packaging racks
               company, enabling users to view and order products effortlessly. 
               Implemented a seamless user interface, ensuring accessibility and 
               functionality across devices. Explore the site to experience a blend 
               of design finesse and user-friendly features, enhancing the client's online presence."
              ghLink="https://github.com/Abdullah1013/My-pacakaging-rack"
              demoLink="https://abdullah1013.github.io/My-pacakaging-rack/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diceGame}
              isBlog={false}
              title="Dice Game"
              description="Designed and implemented a dynamic multiplayer
               dice game as a practice project where two players engage in a thrilling contest.
                The player with the highest dice value emerges victorious,
                 showcasing a playful combination of JavaScript interactivity
                  and engaging user experience. Experience the excitement firsthand by exploring this project."
              ghLink="https://github.com/Abdullah1013/dice_game"
              demoLink="https://abdullah1013.github.io/dice_game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordSearch}
              isBlog={false}
              title="Word Search Game"
              description="Created an engaging word search game in C++, offering
               multiple difficulty levels for players to choose from. Challenge yourself
                by guessing the missing alphabets in the presented words, showcasing both 
                problem-solving skills and C++ console-based programming expertise. Explore 
                this text-based project for an interactive and educational gaming experience."
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
