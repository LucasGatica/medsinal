import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Projetos de pesquisa",
          "Projetos de extensão",
          "Projetos Indissociáveis ",
          "Projetos Científicos",
          "Artigos Científicos"

          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
