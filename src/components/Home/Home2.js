import React from "react";
import Form from "./Form"

import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import imagem1 from "../../Assets/lista/img2.svg";
import imagem2 from "../../Assets/lista/barba.svg";
import imagem3 from "../../Assets/lista/brainstorm.svg";
import imagem4 from "../../Assets/lista/divulgar.svg";
import imagem5 from "../../Assets/lista/match.svg";
import imagem6 from "../../Assets/lista/img6.svg";
import {
  
  AiFillInstagram,
} from "react-icons/ai";
import{RiWhatsappFill} from "react-icons/ri";
import Button from "react-bootstrap/Button";


import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="/editais"
            
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            
            
            &nbsp;Editais Vigentes
          </Button>
          






        </Row>
            
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>

            
 <span className="purple">
O que é o ProjEx?
 </span> 
            </h1>
            <p className="home-about-body">
              
              
            <div class="teste2"  onClick={() => //-------------------------------------------------
            {
              var dica2 = document.querySelector("div.teste2")
              dica2.innerHTML=' ProjEx ou Projetos E  xponencias é um Programa de Transformação Digital de <b style="color: purple">Projetos acadêmicos,de pesquisa aplicada e/ou de extensão universitária, oriundos de instituições de educação profissional e tecnológica e/ou de educação superior</b> que visa apoiar pesquisadores e extensionistas no desenvolvimento de Soluções Tecnológicas Digitais Inovadoras aplicadas à Problemas Científicos Socialmente Relevantes investigados!'

              
 }} onMouseLeave={()=>{
  var dica2 = document.querySelector("div.teste2")
  dica2.innerHTML="ProjEx ou Projetos Exponencias é um Programa online de<b style='color: purple',text-decoration: underline> Transformação Digital de Projetos* </b>que visa apoiar pesquisadores no desenvolvimento de Soluções Tecnológicas Digitais Inovadoras a Problemas Científicos Socialmente Relevantes investigados em pesquisas aplicadas."
 }
 
 }>



  
ProjEx ou Projetos Exponencias é um Programa online de 
<b 
              

 className="purple2"> Transformação Digital de Projetos* </b> 
 que visa apoiar pesquisadores no
 desenvolvimento de Soluções Tecnológicas Digitais Inovadoras a  Problemas Científicos Socialmente Relevantes investigados em pesquisas aplicadas.

  

 
        </div>






              
              
              <br />
              <br />
      
              
             
            </p>
            <h1 style={{ fontSize: "2.6em" }}>
            
 <span className="purple">
Como funciona? </span> 
            </h1>
            <p className="home-about-body">

            A partir da adesão da instituição de ensino ao ProjEx, o programa é constituído de 6 fases:
 <br></br>
 <br></br>

 <main>
            <ul class="produtos">

                <li>
                   
                   <img src={imagem1} class="pequeno" alt="1"></img>
                   <p class="produto-descricao">1) Cadastro de Pesquisador (e equipe) p/ participação no ProjEx.</p>
                   

                </li>

                <li>
                    
                    <img src={imagem2} class="grande"></img>
                    <p class="produto-descricao">2) curso online de formação teórica p/ Transformação Digital de Projetos</p>
                 

                </li>

                <li>
                 
                    <img src={imagem3} class="grande"></img>
                    <p class="produto-descricao">3) Oficinas de brainstorm p/ geração de propostas de  Projetos Exponenciais</p>
                    

                </li>
                <li>
                   
                    <img src={imagem4} class="maispequeno"></img>
                    <p class="produto-descricao">4)  Divulgação das propostas geradas à comunidade externa</p>
                    
 
                 </li>
 
                 <li>
                     
                     <img src={imagem5} class="match"></img>
                     <p class="produto-descricao">5) Evento de Conexão c/ organizações externas* p/ obtenção de "matchs"</p>
                  
 
                 </li>
 
                 <li>
                  
                     <img src={imagem6} class="pequeno"></img>
                     <p class="produto-descricao">6) Apoio Estratégico* as propostas com match</p>
                     
 
                 </li>

            </ul>
        </main>
<br></br>



            </p>


            <h1 style={{ fontSize: "2.6em" }}>
            
 <span className="purple">
Quanto Custa? </span> 
            </h1>
            <p className="home-about-body">
          <span className="purple3">             É totalmente gratuito!!!  <span className="wave" role="img" aria-labelledby="wave">
                🚀 
                </span>
</span>
<br></br>
<br></br>
            </p>


            <h1  style={{ fontSize: "2.6em" }}>
            
 <span className="purple" > 
Bora participar? </span> 
            </h1>
            <p className="home-about-body">
            Veja se a sua instituição já aderiu ao ProjEx e faça a sua inscrição!
            <br></br>
            <br></br>
            

            
            


            </p>
            <br></br>
            <h1  style={{ fontSize: "2.6em" }}>
            
 <span className="purple" > 
 Sua instituição ainda não aderiu ao ProjEx?  </span> 
            </h1>
            <br></br>
            <p className="home-about-body">
            Seja um embaixador ProjEx e leve o programa para seu espaço educacional!  Preencha seu cadastro em nossa lista de Embaixadores ProjEx e aguarde nosso contato! 


            </p>
            <br></br>
            </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            
            
            <br></br>
            <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfku5TMLRJ6t6wtIhqDisYD58_gHl8JuqwuyPP3QO7Imu9bog/viewform"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            
            
            &nbsp;Seja um embaixador ProjEx
          </Button>
          






        </Row>
        
            <br></br>
            <p>
              Nossas <span className="purple">redes sociais </span>
            </p>
            
        
            <ul className="home-about-social-links">
             
              <li className="social-icons">
                <a
                  href="https://whatsapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <RiWhatsappFill />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/company/projex-ifrs/about/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/projexifrs/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
