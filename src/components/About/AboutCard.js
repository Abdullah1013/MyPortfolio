import React from "react";
import Card from "react-bootstrap/Card";
import { GiGamepad } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { MdTravelExplore } from "react-icons/md";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdullah Khan </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />
            I am a <span className="purple">Full Stack &amp; AI Application Developer</span>
            building production applications with React, Next.js, NestJS, and TypeScript.
            <br /><br />
            I develop RAG pipelines, LLM tool-calling workflows, and conversational agents
            with OpenAI and OpenRouter. My work also includes Twilio WhatsApp automation,
            Retell voice agents, and multi-step workflows in n8n.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <div className="hobby-chips">
            <div className="hobby-chip">
              <GiGamepad className="hobby-chip-icon" />
              <span>Playing Games</span>
            </div>
            <div className="hobby-chip">
              <MdOutlineFoodBank className="hobby-chip-icon" />
              <span>Cooking</span>
            </div>
            <div className="hobby-chip">
              <MdTravelExplore className="hobby-chip-icon" />
              <span>Travelling</span>
            </div>
          </div>

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
