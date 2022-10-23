import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/image5.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Form from "./Form"
import Type from "./Type";
import Button from "react-bootstrap/Button";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Proj<strong className="main-name">Ex </strong>
                
                
              </h1>

              <h2 className="heading-name">
              <strong className="main-name"> Pesquisador</strong>
              <span className="wave" role="img" aria-labelledby="wave">
                🚀 
                </span> transforme seus              </h2>

              <div style={{ padding: 50, textAlign: "left",fontSize:"1.3em", minHeight:"150px" }}>
                <Type />
              </div>
            </Col>
            
            

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
              
            </Col>
            <h1 style={{ paddingBottom: 1,fontSize:"1px" }} className="heading">
                
            Em uma Solução Tecnológica Digital Inovadora              </h1>
            <br></br>
            </Row>
            
            
          
          
        </Container>
        
      </Container>
      <Home2 />
      
    </section>
  );
}

export default Home;
