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

export default function Login() {
  return (
    <Container>
      <Form>
        <Fields>
          <Field>
            <Label>Email</Label>
            <Input type="email" />
          </Field>

          <Field>
            <Label>Senha</Label>
            <Input type="password" />
          </Field>
        </Fields>
        <Button type="submit">ENTRAR</Button>
      </Form>

      <Image src="/assets/gato1.jpg" alt="Logo" />
    </Container>
  );
}
