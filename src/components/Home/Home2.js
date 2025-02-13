import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Ritik.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me <span className="purple"> Introduce </span> Myself
            </h1>

            <p className="home-about-body">
              I'm an <span className="purple">Enthusiastic Learner</span> and a <span className="purple">passionate Software Developer</span>. I recently graduated with a Bachelor's degree in <span className="purple">Computer Science</span> from Dayananda Sagar College of Engineering, Bengaluru.
              My journey in the world of programming began with a fascination for creating digital solutions. I have honed my skills in languages like
              <i>
                <b className="purple">C/C++, C#, JavaScript, TypeScript, SQL and Java.</b>
              </i>
              <br />
              <br />
              My passion lies in building cutting-edge <i><b className="purple">web technologies and products</b></i>, and I'm also drawn to the realms of <i><b className="purple">DevOps</b></i>.
              <br />
              <br />
              Utilizing my proficiency in <b className="purple">Node.js</b> and modern JavaScript libraries and frameworks including <i><b className="purple">React.js, Nest.js, Express.js, SvelteKit, and TailwindCSS</b></i>, I strive to create impactful and innovative web solutions.
              <br />
              <br />
              Currently, I'm an <b className='purple'>Associate Software Engineer</b> at <b className='purple'>Light and Wonder</b>, building scalable <b className='purple'>REST APIs</b> in <b className='purple'>ASP.NET Core</b> & <b className='purple'>PostgreSQL</b>, optimizing gameplay with <b className='purple'>LoadTest</b> (React.js, Python), and enhancing <b className='purple'>ETG Server</b> simulators for seamless <b className='purple'>PT-DT</b> communication.
            </p>

            {/* <p className="home-about-body">
              I'm an <span className="purple">Enthusiastic Learner </span> and a <span className="purple">passionate software Developer  </span>pursuing my final year of Bachelor's degree in <span className="purple">Computer Science</span> at Dayananda Sagar College of Engineering, Bengaluru.
              My journey in the world of programming began with a fascination for creating digital solutions. I have honed my skills in classics like
              <i>
                <b className="purple"> C/C++, HTML&CSS, Javascript, Typescript and Java.</b>
              </i>
              <br />
              <br />
              My passion lies in building cutting-edge <i><b className="purple">web technologies and products</b></i>, and I'm also drawn to the realms of <i><b className="purple">DevOps.</b></i>
              <br />
              <br />
              Utilizing my proficiency in <b className="purple">Node.js</b> and modern JavaScript libraries and frameworks including <i><b className="purple">React.js, Nest.js, Express.js, and Redux.js</b></i>, I strive to create impactful and innovative web solutions.
            </p> */}
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find me on</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ritik2358"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rits2358/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ritik117"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ritikraj2909@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
