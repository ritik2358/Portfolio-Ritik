import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import brane from "../../Assets/Experience/brane.jpeg";
import lnw from "../../Assets/Experience/LnW_Logo.jpg";
import CI from "../../Assets/Experience/codeinbound logo.png";
import Alhansat from "../../Assets/Experience/Alhansat.jpeg";
import ExperienceCards from "./ExperienceCards";

function Experiences() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Journey through Code: <strong className="purple">Experiences</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Explore a compilation of live projects from my internships, showcasing my hands-on experience in turning ideas into reality.
                </p>


                {/* <p style={{ color: "white" }}>
                    Embark on a visual tour of my coding odyssey, where I've brought concepts to life in various live projects during my enriching internships. Explore the dynamic landscapes of innovation and problem-solving that define my professional journey.
                </p> */}

                <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
                    <Col md={4} className="project-card">
                        <ExperienceCards
                            imgPath={lnw}
                            isBlog={false}
                            title={
                                <>
                                    Software Engineer Intern
                                    <br />
                                    (Mar 2024 - Present)
                                </>
                            }
                            description={
                                <>
                                    • Engineered <strong className="purple">automation</strong> test scripts using the <strong className="purple">Fitnesse Framework</strong> on <strong className="purple">X-series</strong> protocol, enhancing codebase
                                    comprehension in <strong className="purple">C++</strong> & <strong className="purple">C#</strong> and improving the operational efficiency of <strong className="purple">ArgOS</strong> & <strong className="purple">EGMs</strong> by <strong className="purple">20%</strong> during the
                                    <strong className="purple"> Capstone project.</strong> <br />
                                    • Redesigned the <strong className="purple">Operator Menu</strong> by replacing <strong className="purple">50+</strong> legacy handlers to <strong className="purple">Websocket</strong> handlers in <strong className="purple">C++</strong> and modernizing
                                    multiple <strong className="purple"> UI </strong> screens using <strong className="purple">React</strong> and <strong className="purple">Typescript</strong>, enhancing user interaction speed by <strong className="purple">30%</strong> <br />
                                    • Written a <strong className="purple">Python</strong> script to <strong className="purple">automate</strong> the addition of copyright headers in specific files.
                                </>

                            }
                            certLink="https://drive.google.com/file/d/1vySBcQYuwnY91RQn0nUm4SRLfp1K7h6i/view?usp=sharing"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ExperienceCards
                            imgPath={Alhansat}
                            isBlog={false}
                            title={
                                <>
                                    Full Stack Developer Intern (Technical Lead)
                                    <br />
                                    (Sep 2023 - Oct 2023)
                                </>
                            }
                            description={
                                <>
                                    • Spearheaded the <strong className="purple">E2E</strong> development of <strong className="purple">Hirelogix</strong>, an Application Tracking System (ATS), serving as the <strong className="purple">Technical Lead</strong>. <br />
                                    • Mentored and guided a team of <strong className="purple">14</strong> interns, resulting in a <strong className="purple">40%</strong> improvement in the job application
                                    tracking process for recruiters. <br />
                                    • Took the lead in designing the <strong className="purple">Architecture</strong> and <strong className="purple">Database Design</strong> using <strong className="purple">Prisma</strong> & <strong className="purple">MySql</strong>. <br />.
                                    • Successfully implemented the entire project from scratch using <strong className="purple">SvelteKit</strong> and <strong className="purple">Node.js</strong>
                                </>

                            }
                            certLink="https://drive.google.com/file/d/1eAT3rxRbf8aSX_ZGhOKCcOWjz8eD2XJH/view?usp=sharing"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ExperienceCards
                            imgPath={CI}
                            isBlog={false}
                            title={
                                <>
                                    Software Development Engineer Intern
                                    <br />
                                    (Jun 2023 - Aug 2023)
                                </>
                            }
                            description={
                                <>
                                    • Implemented crucial features in  <strong className="purple">Network Monitoring System (NMS)</strong>, including Event Emission using  <strong className="purple">EventEmitter</strong>, Email Sender with <strong className="purple">Nest Mailer</strong>, Notification Engine with <strong className="purple">Queues</strong> and creation of Shadow Users using <strong className="purple">Typescript</strong> & <strong className="purple">PostgreSQL</strong>. <br />
                                    • Utilised <strong className="purple">MERN Stack</strong> and <strong className="purple">Nest JS</strong> for <strong className="purple">client-server communication</strong>. <br />
                                    • Written test cases for unit and integration testing using <strong className="purple">Jest</strong> by ensuring the quality of many endpoints in <strong className="purple">Swagger</strong> that increased the code coverage by <strong className="purple">80%</strong>.
                                </>

                            }
                            certLink="https://drive.google.com/file/d/10FEUf2hvwbTY3WQu0SiToRHha9lkKF_5/view?usp=sharing"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Experiences;
