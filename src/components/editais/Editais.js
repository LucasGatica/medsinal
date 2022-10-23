import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Parceiros from "./Parceiros";



function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
       
      
        <h1 className="project-heading">
          Parceiros Proj<strong className="purple">Ex </strong>
        </h1>


        <h1 className="project-heading">
          <strong className="purple">Editais</strong> vigentes
        </h1>
        <br></br>
        
        <Parceiros/>
        <br></br>
        
       
      </Container>
    </Container>
  );
}

export default About;