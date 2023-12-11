import { api } from "@/services/api";
import React from "react";
import { CloseButton, ModalContainer, ModalHeader, Title } from "./styles";

export default function Modal({
  isOpen,
  setModalOpen,
  title,
  children,
}: {
  isOpen: boolean;
  setModalOpen: (value: boolean) => void;
  title?: string;
  children?: React.ReactNode;
}) {
  if (isOpen) {
    return (
      <ModalContainer>
        <ModalHeader>
          <Title>{title ? title : "Suas informações"}</Title>
          <CloseButton onClick={() => setModalOpen(false)}>X</CloseButton>
        </ModalHeader>
        {children}
      </ModalContainer>
    );
  }
  return null;
}
