import React from "react";
import { Row, Col } from "react-bootstrap";
import { HiAcademicCap } from "react-icons/hi";
import { BsCalendar3, BsGeoAlt, BsPatchCheckFill } from "react-icons/bs";

function Education() {
  return (
    <Row style={{ justifyContent: "center", marginTop: "20px" }}>
      <Col md={8} lg={7}>
        <div className="education-card">
          <div className="education-icon-wrap">
            <HiAcademicCap className="education-icon" />
          </div>

          <div className="education-body">
            <span className="education-badge">Bachelor's Degree</span>

            <h3 className="education-degree">
              Computer Science
            </h3>

            <h5 className="education-uni">
              University of Central Punjab
            </h5>

            <div className="education-meta">
              <span>
                <BsGeoAlt style={{ marginRight: "6px" }} />
                Lahore, Pakistan
              </span>
              <span>
                <BsCalendar3 style={{ marginRight: "6px" }} />
                2021 — 2025
              </span>
            </div>

            <div className="education-highlights">
              <div className="education-highlight-item">
                <BsPatchCheckFill className="highlight-check" />
                <span>Full Stack Web Development</span>
              </div>
              <div className="education-highlight-item">
                <BsPatchCheckFill className="highlight-check" />
                <span>Data Structures &amp; Algorithms</span>
              </div>
              <div className="education-highlight-item">
                <BsPatchCheckFill className="highlight-check" />
                <span>Software Engineering &amp; System Design</span>
              </div>
              <div className="education-highlight-item">
                <BsPatchCheckFill className="highlight-check" />
                <span>Database Management Systems</span>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Education;
