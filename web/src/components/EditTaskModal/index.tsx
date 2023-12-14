import { api } from "@/services/api";
import React, { useEffect, useState } from "react";
import Modal from "../modal";
import {
  ModalContent,
  Select,
  SharedLineTextBox,
  SharedLineTextBoxes,
  SubmitButton,
  TextBox
} from "./styles";

interface Task {
  id_task: string;
  title: string;
  description: string;
  deadline: string;
  status: string;
}

export default function EditTaskModal({
  task,
  isOpen,
  setModalOpen,
  setTasks
}: {
  isOpen: boolean;
  setModalOpen: (value: boolean) => void;
  task?: Task;
  setTasks: (value: (tasks: Task[]) => Task[]) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("TODO");

  useEffect(() => {
    if (task) {
      setTitle(task?.title || "");
      setDeadline(task?.deadline || "");
      setDescription(task?.description || "");
      setStatus(task?.status || "");
    }
  }, [task]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    }
    if (name === "description") {
      setDescription(value);
    }
    if (name === "deadline") {
      setDeadline(value);
    }
    if (name === "status") {
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
      if (task) {
        await api.put(
          `/tasks/${task.id_task ?? ""}`,
          data
        );
        setTasks((tasks) =>
          tasks.map((t) => {
            if (t.id_task === task.id_task) {
              return {
                ...t,
                ...data,
              };
            }
            return t;
          })
        );
        alert("Task atualizada com sucesso!");
      } else {
        alert("Task não encontrada!");
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
      title="Editar task"
    >
      <ModalContent onSubmit={handleSubmit}>
        <SharedLineTextBoxes>
          <SharedLineTextBox
            value={title}
            type="text"
            placeholder="Titulo"
            name="title"
            onChange={handleChange}
          />
          <SharedLineTextBox
            value={description}
            type="text"
            placeholder="Descrição"
            name="description"
            onChange={handleChange}
          />
        </SharedLineTextBoxes>
        <TextBox
          type="date"
          name="deadline"
          onChange={handleChange}
        />
        <Select name="status" onChange={handleChange}>
          <option value="TODO">À fazer</option>
          <option value="DOING">Fazendo</option>
          <option value="DONE">Feito</option>
        </Select>
        
        <SubmitButton > Enviar </SubmitButton>
      </ModalContent>
    </Modal>
  );
}
