import React, { useState } from "react";
import Modal from "../modal";
import {
  ErrorMessage,
  ModalContent,
  SharedLineTextBox,
  SharedLineTextBoxes,
  SubmitButton,
  TextBox,
  TextBoxContainer,
} from "./styles";
import { api } from "@/services/api";

export default function NewEmployeeModal({
  isOpen,
  setModalOpen,
}: {
  isOpen: boolean;
  setModalOpen: (value: boolean) => void;
}) {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    }
    if (name === "LastName") {
      setLastName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "cpf") {
      setCpf(value);
    }
    if (name === "password") {
      if (value.length < 6) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }

      setPassword(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      firstName,
      LastName,
      email,
      cpf,
      password,
    };
    try {
      const response = await api.post("/employee", data);
      alert("Funcionário cadastrado com sucesso!");
      setModalOpen(false);
    } catch (error: any) {
      alert("Algum campo foi preenchido incorretamente");
    }
  };

  return (
    <Modal isOpen={isOpen} setModalOpen={setModalOpen} title="Novo funcionário">
      <ModalContent onSubmit={handleSubmit}>
        <SharedLineTextBoxes>
          <SharedLineTextBox
            type="text"
            placeholder="Primeiro nome"
            name="firstName"
            onChange={handleChange}
          />
          <SharedLineTextBox
            type="text"
            placeholder="Ultimo nome"
            name="LastName"
            onChange={handleChange}
          />
        </SharedLineTextBoxes>
        <TextBox
          type="text"
          placeholder="CPF"
          name="cpf"
          onChange={handleChange}
        />
        <TextBox
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <TextBoxContainer>
          <TextBox
            type="password"
            placeholder="Senha"
            name="password"
            onChange={handleChange}
          />
          {passwordError && (
            <ErrorMessage>Senha deve ter no mínimo 6 caracteres!</ErrorMessage>
          )}
        </TextBoxContainer>
        <SubmitButton disabled={passwordError}> Enviar </SubmitButton>
      </ModalContent>
    </Modal>
  );
}
