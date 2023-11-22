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

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from '../../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await api.post('/employees/authenticate', { email, password });
      localStorage.setItem('token', response.data.token);
      await router.push("/clientes");
      console.log("Pushed")
    } catch (error) {
      alert('Invalid email or password');
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Fields>
          <Field>
            <Label>Email</Label>
            <Input type="email" name='email' onChange={handleChange} />
          </Field>

          <Field>
            <Label>Senha</Label>
            <Input type="password" name='password' onChange={handleChange} />
          </Field>
        </Fields>
        <Button type="submit">ENTRAR</Button>
      </Form>

      <Image src="/assets/gato1.jpg" alt="Logo" />
    </Container>
  );
}
