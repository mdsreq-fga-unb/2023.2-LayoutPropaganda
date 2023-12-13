import { api } from "@/services/api";
import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 500px;
  padding: 150px;
  background-color: #3a3838;
  border-radius: 24px;
`;

const ModalHeader = styled.div`
  position: fixed;
  top: 25px;
  left: 225px;
  transform: translate(-50%, -50%);
  color: #000000;
  background-color: #0d0d0d;
  width: 450px;
  height: 50px;
  padding: 13px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  border-bottom: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 24px;
`;

const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  width: 50px;
  font-weight: 500;
  font-size: 24px;
  background-color: transparent;
`;

const ModalContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 400px;
`;

const TextBox = styled.input`
  width: 100%;
  padding: 16px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #9c9c9c;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease;

  color: #000000;
  
  &::placeholder {
    color: #fff;
  }

  &:focus {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  }
`;

const Message = styled.input`
  display: flex;
  width: 100%;
  height: 120px;
  justify-items: start;
  outline: none;
  border: solid 1px #de8983;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;
`;

const SubmitButton = styled.button`
  width: 60%;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: #363636;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  color: #ff0000;
  font-size: 20px;
  &:hover {
    background-color: #ff0000;
    color: #363636;
    cursor: pointer;
  }
`;

const Title = styled.h1`
  color: #fff;
  font-weight: 500;
  font-size: 24px;
`;

export default function Modal({
  isOpen,
  setModalOpen,
}: {
  isOpen: boolean;
  setModalOpen: (value: boolean) => void;
}) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "phone") {
      setPhone(value);
    }
    if (name === "message") {
      setMessage(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      message,
    };
    try {
      await api.post("/contacts", data);
      alert("Mensagem enviada com sucesso!");
      setModalOpen(false);
    } catch (error: any) {
      alert("Algum campo foi preenchido incorretamente");
    }
  };

  if (isOpen) {
    return (
      <ModalContainer>
        <ModalHeader>
          <Title>Suas informações</Title>
          <CloseButton onClick={() => setModalOpen(false)}>X</CloseButton>
        </ModalHeader>
        <ModalContent onSubmit={handleSubmit}>
          <TextBox
            type="text"
            placeholder="Nome"
            name="name"
            onChange={handleChange}
          ></TextBox>
          <TextBox
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          ></TextBox>
          <TextBox
            type="text"
            placeholder="Telefone"
            name="phone"
            onChange={handleChange}
          ></TextBox>
          <TextBox
            type="text"
            placeholder="Mensagem"
            name="message"
            onChange={handleChange}
          ></TextBox>
          <SubmitButton> Enviar </SubmitButton>
        </ModalContent>
      </ModalContainer>
    );
  }
  return null;
}
