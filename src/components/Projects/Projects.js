import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ceci from "../../Assets/Projects/codeEditor.png";
import lucas from "../../Assets/Projects/chatify.png";
import marcos from "../../Assets/Projects/blog.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Equipe <strong className="purple"> Projex </strong>
        </h1>
        <p style={{ color: "white" }}>
          Nossa equipe
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ceci}
              isBlog={false}
              title="Cecilia Machado"
              description="18 anos
              Cursando sistemas para internet no IFRS. 
              Participei da Olímpiada Brasiliera de Tecnologia em 2021 e me apaixonei por tecnologia e desenvolvimento.
              EX Bolsista de iniciação científica do colégio de Aplicação  da UFRGS
              Fâ de The Office e Livros de Fantasia."
              ghLink=" https://www.linkedin.com/in/cecilia-machado-a77382241 "
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lucas}
              isBlog={false}
              title="Lucas Gatica "
              description="Desenvolvedor Front-End, formado em informática, estudante de Biomedicina e Biotecnologia. Fã de livros de ficção cientifica bons e filmes de terror ruins."
              ghLink="https://www.linkedin.com/in/lucas-gatica-59665a189/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marcos}
              isBlog={false}
              title="Marcos Mathies"
              description="31 anos
              Mestre em Educação Profissional e Tecnológica
              Servidor da Diretoria da Extensão do IFRS - Campus POA,  ex-empreendedor part-time (quebrou 2x)  Fundador da Incubadora ELAN de empresas do IFRS/ Coordenador do ProjEx. 
              Gosto de criticar os críticos.  Aprendendo programação sozinho pq cansou de depender dos outros. Ser>>>Parecer."
              ghLink="https://www.linkedin.com/in/marcos-mathies-046a18219/"
              demoLink=""
            />
          </Col>

          

         

     
        </Row>
      </Container>
    </Container>

    
  );
}

export default Projects;
