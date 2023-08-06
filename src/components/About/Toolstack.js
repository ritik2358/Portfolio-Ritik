import { FaAws } from "react-icons/fa";
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGithub,
  SiVisualstudiocode,
  SiGooglecloud,
  SiDocker,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>

    </Row>
  );
}

export default Toolstack;