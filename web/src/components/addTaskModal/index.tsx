import { api } from "@/services/api";
import React, { useState } from "react";
import Modal from "../modal";
import {
  ModalContent,
  Select,
  SharedLineTextBox,
  SharedLineTextBoxes,
  SubmitButton,
  TextBox
} from "./style";

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

export default function AddTaskModal({
  isOpen,
  setModalOpen,
  employee,
}: {
  isOpen: boolean;
  setModalOpen: (value: boolean) => void;
  employee?: Employee;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("TODO");


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
    if(name === "status"){
      setStatus(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      title,
      description,
      deadline,
      status
    };
    try {
      const response = await api.post("/tasks/" + employee?.id_employee ?? "", data);
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
        <Select name="status" onChange={handleChange}>
          <option value="TODO">À fazer</option>
          <option value="DOING">Fazendo</option>
          <option value="DONE">Feito</option>
        </Select>
        <SubmitButton > Criar </SubmitButton>
      </ModalContent>
    </Modal>
  );
}
