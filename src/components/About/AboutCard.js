import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey Folks! I'm <span className="purple">Ritik Raj</span>, a passionate Software
            Developer based in <span className="purple">Bangalore, India</span>.
            <br /> I bring over two years of professional experience delivering backend systems, APIs, and web applications at <span className="purple">Light and Wonder</span>.
            I thrive on turning innovative ideas into digital realities by :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Crafting Seamless Code Experiences
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Impactful Web Solutions
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            I am a strong fit for teams that value pragmatic engineering, quality delivery, and product-focused collaboration.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Code by code, I shape the future, inspired by challenges and driven by endless possibilities."{" "}
          </p>
          <footer className="blockquote-footer">Ritik</footer>

          Apart from coding, some other activities that I love to do!
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking Food
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
