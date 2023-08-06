import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import LiveSession_App from "../../Assets/Projects/livesession.jpeg";
import NodeMailer from "../../Assets/Projects/Nodemailer.png";
import Decharge from "../../Assets/Projects/Decharge.jpeg";
import FoodHub from "../../Assets/Projects/foodhub.png";
import Nestgree from "../../Assets/Projects/Nestgree.png";
import TravelDiary from "../../Assets/Projects/Travel.jpeg";

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
              imgPath={FoodHub}
              isBlog={false}
              title="FoodHub"
              description="FoodHub is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to discover and order various food items listed by FoodHub."
              ghLink="https://github.com/Mansi209aps/FoodHub"
              demoLink="https://food-hub-chi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TravelDiary}
              isBlog={false}
              title="TravelDiary"
              description="This is a Full Stack application that allows users to share their visited places and discover new destinations. This project utilizes various technologies such as MongoDB, Express.js, React.js, Node.js, Maps API, and Netlify & Render"
              ghLink="https://github.com/ritik2358/TravelDiary"
              demoLink="https://traveldiarybcknd.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Decharge}
              isBlog={false}
              title="DeCharge"
              description="This is an application for a decentralized co-charging station. It allows users to interact with a smart contract deployed on a blockchain network to manage co-charging services."
              ghLink="https://github.com/ritik2358/DeCharge"
              demoLink="https://clever-otter-826dc1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NodeMailer}
              isBlog={false}
              title="Automatic-Nodemailer"
              description="This is a Node.js based application that allows you to automatically respond to emails sent to your Gmail mailbox while you're away on a vacation or unavailable. This application checks for new emails in a specified Gmail ID, sends replies to emails that have no prior responses, and adds a label to the email before moving it to the labeled folder. The entire process is repeated automatically at random intervals between 45 to 120 seconds."
              ghLink="https://github.com/ritik2358/Automatic-Nodemailer"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Nestgree}
              isBlog={false}
              title="Nestgree"
              description="This is a simple CRUD API built using NestJS, ExpressJS, TypeORM and PostgreSQL that provides basic CRUD (Create, Read, Update, Delete) operations for managing items. It follows a modular and scalable architecture using NestJS modules and comes with built-in validation, error handling, and logging for ease of use and debugging."
              ghLink="https://github.com/ritik2358/Nestgree"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LiveSession_App}
              isBlog={false}
              title="Live Session App"
              description="This is a Live Session App for neatSkills that allows users to schedule and host meetings using the Jitsi Meet External API. With this app, users can easily create and join video conferences with participants."
              ghLink="https://github.com/ritik2358/LiveSession_App"
              demoLink="https://live-session-app.vercel.app/"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
