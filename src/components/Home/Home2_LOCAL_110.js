import React from "react";
import Form from "./Form"

import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
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
            href="https://forms.gle/YjvZVBBDCdG3Kq3x8"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            
            
            &nbsp;Quero me inscrever
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
              dica2.innerHTML=' ProjEx ou Projetos Exponencias é um Programa de Transformação Digital de <b style="color: purple">Projetos acadêmicos,de pesquisa aplicada e/ou de extensão universitária, oriundos de instituições de educação profissional e tecnológica e/ou de educação superior</b> que visa apoiar pesquisadores e extensionistas no desenvolvimento de Soluções Tecnológicas Digitais Inovadoras aplicadas à Problemas Científicos Socialmente Relevantes investigados!'

              
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
 O que oferecemos? </span> 
            </h1>
            <p className="home-about-body">

            - Serviço de consultorias técnicas de T.I e modelagem de negócios
            <br></br>
            <br></br>

 - Networking e conexão com organizações interessadasM
 <br></br>
 <br></br>

 - microinvestimentos (na forma de subvenção) p/ contratação de serviços técnicos de análise e desenvolvimento de sistemas (softwares e hardwares) para prototipação rápida.

 <br></br>
 <br></br>

            </p>


            <h1 style={{ fontSize: "2.6em" }}>
            
 <span className="purple">
 Da Disponibilidade Orçamentária </span> 
            </h1>
            <p className="home-about-body">
            O Programa ProjEx tem suas operações planejadas a partir da disponibilidade orçamentária anual de recursos alocados p/ execução das atividades previstas. Para o Ciclo 2022/23, o montante captado é de R$ 9.000,00, sendo reservado para a transformação digital de uma(1) proposta de Projeto Exponencial.
         
<br></br>
<br></br>
            </p>


            <h1  style={{ fontSize: "2.6em" }}>
            
 <span className="purple" > 
Como funciona? </span> 
            </h1>
            <p className="home-about-body">
            
            <span className="purple">
  1) Capacitação
  </span>
  <br></br>
  <br></br>
Baixe o E-book e assista aos vídeos do curso online de transformação digital de projetos (EM BREVE!)

  <br></br>
  <br></br>
  <span className="purple">
2) Ideação  </span>
  <br></br>
  <br></br>
  Baixe a planilha do ProjEx Canvas e gere uma proposta de Projeto Exponencial
  <br>
  </br>
  <br>
  </br>
  <span className="purple">
3) Submissão
    
  </span>
  <br></br>
  <br></br>
Submeta sua proposta responda o questionário de diagnóstico com as informações concernentes acerca de sua proposta de Projeto Exponencial


  <br>
  </br>
  <br>
  </br>
  <span className="purple">
4) Avaliação
    
  </span>
  <br></br>
  <br></br>

Aguarde pela análise da proposta por parte da Equipe do ProjEx


  <br>
  </br>
  <br>
  </br>
  <span className="purple">
    5) Entrevista
    
  </span>
<br></br>
<br></br>
Agende uma consultoria com a Equipe do ProjEx e receba feedbacks sobre seu Projeto Exponencial

<br>
  </br>
  <br>
  </br>
  <span className="purple">
    6) Encaminhamento
    
  </span>
<br></br>
<br></br>
Após deliberação interna quanto à viabilidade de sua proposta, e em acordo com a disponibilidade orçamentária, a Equipe do ProjEx irá prestar os feedbacks ao proponente direcionando a proposta avaliada p/ o devido encaminhamento:
<br></br>
<br></br>

a) Aprovado p/ transformação digital - Início Imediato
<br></br>
<br></br>


b) Aprovado p/ transformação digital - aguardando recursos.
<br></br>
<br></br>

b) Reprovado p/ transformação digital

<br></br>
<br></br> 
            </p>
            <br></br>
            <h1 style={{ fontSize: "2.6em" }}>
            
 <span className="purple">
 Deseja divulgar o ProjEx na sua instituição?</span> 
            </h1>
            <p className="home-about-body">
           <span> Seja um Embaixador ProjEx!  </span>   
<br></br>
<br></br>
            </p>
            



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
            href="https://forms.gle/YjvZVBBDCdG3Kq3x8"
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
