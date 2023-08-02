import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import ResumeContent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Ritik Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <ResumeContent
              title="Placeholder"
              date="Placeholder"
              content={[
                "Placeholder",
                "Placeholder",
                "Placeholder",
                "Placeholder",
                "Placeholder",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <ResumeContent
              title="Placeholder"
              content={[
                "Placeholder",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <ResumeContent
              title="Placeholder"
              date="Placeholder"
              content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
            />

            <h3 className="resume-title">Publications</h3>
            <ResumeContent
              title=""
              content={[
                "Placeholder",
              ]}
            />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <ResumeContent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Placeholder",
                "Placeholder",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
