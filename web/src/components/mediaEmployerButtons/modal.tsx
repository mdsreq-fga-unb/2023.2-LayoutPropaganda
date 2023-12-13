import { IMedia } from "@/app/employer/medias/page";
import {
  ButtonContainer,
  CancelButton,
  CloseButton,
  DeleteButton,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalText,
  Title,
} from "./styles";

import { api } from "@/services/api";

export default function Modal({
  isOpen,
  setModalOpen,
  id,
  setMedias
}: {
  isOpen: boolean;
  setModalOpen: (value: boolean) => void;
  id: string;
  setMedias: (value: IMedia[]) => void;
}) {
  const handleSubmit = async () => {
    try {
      await api.delete("/medias/" + id);
      alert("Mídia exluída com sucesso");
      setMedias((await api.get("/medias")).data);
      setModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {isOpen && (
        <ModalContainer>
          <ModalHeader>
            <Title>Excluir Mídia</Title>
            <CloseButton onClick={() => setModalOpen(false)}>X</CloseButton>
          </ModalHeader>
          <ModalContent>
            <ModalText>Tem certeza que deseja excluir essa mídia?</ModalText>
            <ButtonContainer>
              <DeleteButton onClick={() => handleSubmit()}>Sim</DeleteButton>
              <CancelButton onClick={() => setModalOpen(false)}>
                Não
              </CancelButton>
            </ButtonContainer>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
}
