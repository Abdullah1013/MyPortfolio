import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdullah Khan </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />
            I am Mern Stack Developer with a the knowledge of Web technologies 
            <br />
            I am currently pursuing my bachelor's degree in computer science, immersing myself
            in the exploration of tech realms and acquiring knowledge in emerging technologies
            and also done my first internship at A4H a uk based company for 6 months.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Invest effort in yourself; results will surely follow, even if it takes time!"{" "}
          </p>
          <footer className="blockquote-footer">Abdullah Khan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
