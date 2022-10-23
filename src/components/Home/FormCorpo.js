import React from "react";


import { Container } from "react-bootstrap";
import Particle from "../Particle";

import { useForm } from "react-hook-form";


function Projects() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <section>

      <Particle />

      <Container className="home-content">

        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Seu nome" {...register("Seu nome", {})} />
          <input type="email" placeholder="Email" {...register("Email", { required: true, pattern: /@/i })} />

          <input type="submit" />
        </form>

        <br>
        </br> <br>
        </br> <br>
        </br> <br>
        </br> <br>
        </br>



        <br>
        </br><br>
        </br><br>
        </br><br>
        </br>

      </Container>

    </section>

  );
}

export default Projects;
