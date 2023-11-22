"use client";
import {
  Button,
  Container,
  Field,
  Fields,
  Form,
  Image,
  Input,
  Label,
} from "./styles";

import { useState } from "react";
import { api } from '../../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    if(name === 'email') {
      setEmail(value);
    }
    if(name === 'password') {
      setPassword(value);
    }
  }
  console.log(email);
  console.log(password);


  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email,
      password
    }
    try {
      const response = await api.post('/employees/authenticate', data);
      console.log(response);
    } catch (error) {
      console.log(error); 
      alert('Invalid email or password');
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Fields>
          <Field>
            <Label>Email</Label>
            <Input type="email" name='email' onChange={handleChange}/>
          </Field>

          <Field>
            <Label>Senha</Label>
            <Input type="password" name='password' onChange={handleChange}/>
          </Field>
        </Fields>
        <Button type="submit">ENTRAR</Button>
      </Form>

      <Image src="/assets/gato1.jpg" alt="Logo" />
    </Container>
  );
}
