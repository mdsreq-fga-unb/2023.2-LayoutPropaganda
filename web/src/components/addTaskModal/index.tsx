import { api } from "@/services/api";
import React, { useState } from "react";
import Modal from "../modal";
import {
  ModalContent,
  SharedLineTextBox,
  SharedLineTextBoxes,
  SubmitButton,
  TextBox
} from "../newEmployeeModal/styles";

export default function AddTaskModal({
  isOpen,
  setModalOpen,
}: {
  isOpen: boolean;
  setModalOpen: (value: boolean) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === "description") {
      setDescription(value);
    }
    if (name === "deadline") {
      setDeadline(value);
    }
    if (name === "title") {
      setTitle(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      title,
      description,
      deadline,
    };
    try {
      const response = await api.post("/tasks", data);
      alert("Responsabilidade atribuida com sucesso!");
      setModalOpen(false);
    } catch (error: any) {
      alert("Algum campo foi preenchido incorretamente");
    }
  };

  return (
    <Modal isOpen={isOpen} setModalOpen={setModalOpen} title="Nova Responsabilidade">
      <ModalContent onSubmit={handleSubmit}>
        <SharedLineTextBoxes>
          <SharedLineTextBox
            type="text"
            placeholder="Titulo"
            name="title"
            onChange={handleChange}
          />
          <SharedLineTextBox
            type="text"
            placeholder="Descrição"
            name="description"
            onChange={handleChange}
          />
        </SharedLineTextBoxes>
        <TextBox
          type="date"
          placeholder="Prazo"
          name="deadline"
          onChange={handleChange}
        />
        <SubmitButton > Criar </SubmitButton>
      </ModalContent>
    </Modal>
  );
}
