import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiBootstrap,
    DiPython,
    DiDjango, DiJava, DiRasberryPi
} from "react-icons/di";
import {SiJupyter} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
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
        <DiPython />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiDjango />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiJupyter />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiJava />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiRasberryPi />
        </Col>
    </Row>
  );
}

export default Techstack;
