import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import edirr from "../../Assets/edirr.gif";
import emotion from "../../Assets/Projects/emotion.png";
import online_therapy from "../../Assets/online_therapy.gif";
import instagram from "../../Assets/instagram.gif";
import suicide from "../../Assets/Projects/suicide.png";


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
              imgPath={instagram}
              isBlog={false}
              title="instagram"
              description="clone instagram with node js,react js and mongoDb"
              
          ghLink="https://github.com/Afiya21/instagrambackend"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edirr}
              isBlog={false}
              title="e-dirr"
              description="this is integrating modern insurance with tradtional socal impact that act like insurance called edirr in ethiopia using mern for web app and flutter for mobile app"
              
              ghLink="https://github.com/Afiya21/eDirr "
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={online_therapy}
              isBlog={false}
              title="online mental therapy"
              description="this project want to solve peoples's insecurity to go to physcologiest.this web app developed by php "
                ghLink="https://github.com/Afiya21/onlineTherapy"
                        
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
