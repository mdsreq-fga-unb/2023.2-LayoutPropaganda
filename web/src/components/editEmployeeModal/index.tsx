import React, { useEffect, useState } from "react";
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

interface Employee {
  id_employee: string;
  first_name: string;
  last_name: string;
  email: string;
  cpf: string;
  is_deleted: boolean;
  updated_at: string;
  created_at: string;
}

export default function EditEmployeeModal({
  employee,
  isOpen,
  setModalOpen,
}: {
  isOpen: boolean;
  setModalOpen: (value: boolean) => void;
  employee?: Employee;
}) {
  const [firstName, setFirstName] = useState(employee?.first_name || "");
  const [lastName, setLastName] = useState(employee?.last_name || "");
  const [email, setEmail] = useState(employee?.email || "");
  const [cpf, setCpf] = useState(employee?.cpf || "");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    if (employee) {
      setFirstName(employee?.first_name || "");
      setLastName(employee?.last_name || "");
      setEmail(employee?.email || "");
      setCpf(employee?.cpf || "");
      setPassword("");
    }
  }, [employee]);

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
      lastName,
      email,
      cpf,
      password,
    };
    try {
      if (employee) {
        const response = await api.put(
          `/employees/${employee.id_employee}`,
          data
        );
        alert("Funcionário atualizado com sucesso!");
      } else {
        alert("Funcionário não encontrado!");
      }
      setModalOpen(false);
    } catch (error: any) {
      alert("Algum campo foi preenchido incorretamente");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      setModalOpen={setModalOpen}
      title="Editar funcionário"
    >
      <ModalContent onSubmit={handleSubmit}>
        <SharedLineTextBoxes>
          <SharedLineTextBox
            value={firstName}
            type="text"
            placeholder="Primeiro nome"
            name="firstName"
            onChange={handleChange}
          />
          <SharedLineTextBox
            value={lastName}
            type="text"
            placeholder="Ultimo nome"
            name="LastName"
            onChange={handleChange}
          />
        </SharedLineTextBoxes>
        <TextBox
          value={cpf}
          type="text"
          placeholder="CPF"
          name="cpf"
          onChange={handleChange}
        />
        <TextBox
          value={email}
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <TextBoxContainer>
          <TextBox
            value={password}
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
