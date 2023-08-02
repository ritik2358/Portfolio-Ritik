import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiGithub
} from "react-icons/si";
import {
    DiAtlassian,
    DiAws,
    DiDatabase,
    DiDocker,
    DiGit,
    DiMysql,
    DiPostgresql,
    DiStackoverflow,
    DiTerminal,
    DiUbuntu,
    DiVisualstudio,
    DiWindows
} from "react-icons/di";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiUbuntu />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiTerminal />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiWindows />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiVisualstudio />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiAws />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiAtlassian />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiStackoverflow />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiDatabase />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiHeroku />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiPostgresql />
        </Col>
    </Row>
  );
}

export default Toolstack;
