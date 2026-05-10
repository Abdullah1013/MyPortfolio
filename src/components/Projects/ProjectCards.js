import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const CHAR_LIMIT = 120;

function ProjectCards(props) {
  const [expanded, setExpanded] = useState(false);

  const isLong = props.description && props.description.length > CHAR_LIMIT;
  const displayText =
    isLong && !expanded
      ? props.description.slice(0, CHAR_LIMIT).trimEnd() + "..."
      : props.description;

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", minHeight: "80px" }}>
          {displayText}
          {isLong && (
            <span
              onClick={() => setExpanded(!expanded)}
              style={{
                color: "#c770f0",
                cursor: "pointer",
                marginLeft: "6px",
                fontWeight: "500",
                whiteSpace: "nowrap",
              }}
            >
              {expanded ? " See Less" : " See More"}
            </span>
          )}
        </Card.Text>
        <div style={{ marginTop: "auto" }}>
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
