import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Seu nome" {...register("Seu nome", {})} />
      <input type="email" placeholder="Email" {...register("Email", {required: true, pattern: /@/i})} />

      <input type="submit" />
    </form>
  );
}