import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/pdf.pdf";
import pdf2 from "../../Assets/../Assets/planilha.xlsx";
import edital from "../../Assets/../Assets/edital.pdf";


import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <div>
      <br></br>
      <br></br><br></br>
      <br></br>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Livro
          </Button>
        </Row>

        <Row className="resume">

        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf2}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download planilha
          </Button>
        </Row>

        <Row>

        </Row>

        <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br><br></br>
      

      </Container>
      </div>
      





    
  );
}

export default ResumeNew;
