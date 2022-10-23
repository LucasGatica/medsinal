import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import pdfif from "../../Assets/../Assets/editalif.pdf"
import pdf from "../../Assets/../Assets/pdfsimple.pdf";




import Ifsul from "../../Assets/ifsul2.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img src={Ifsul} className="img-fluid" alt="avatar" />
      <br></br>
      <Button
            variant="primary"
            
            target="_blank"
            style={{ maxWidth: "150px" }}
            href="http://editais.ifsul.edu.br/index.php?c=lista&id=1891"
          >
            <AiOutlineDownload />
            &nbsp;Edital
          </Button>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "150px", marginTop: "10px"}}
          >
            <AiOutlineDownload />
            &nbsp;info chamada
          </Button>
          <Button
            variant="primary"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfBBzFOAY94-WgZZuVlHOn3eukXtAi4Ld_cUaHwdjI0DUPorg/viewform"
            target="_blank"
            style={{ maxWidth: "150px", marginTop: "10px"}}
          >
            <AiOutlineDownload />
            &nbsp;Inscrição 
          </Button>
      </Col>
      
    </Row>
  );
}

export default Toolstack;