import { BookOpenText, PenSquare, Trash2 } from "lucide-react";
import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./modal";
import { IconButton } from "./styles";
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`;

export default function MediaEmployerButtons({ id }: { id: string }) {
  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);
  return (
    <ButtonContainer>
      <PenSquare onClick={() => router.push("/employer/editMedia")} />
      <IconButton onClick={() => router.push("/employer/readMedia/" + id)}>
        <BookOpenText color="#22d422" />
      </IconButton>
      <IconButton onClick={() => setOpenModal(true)}>
        <Trash2 color="#bd0e0e" />
      </IconButton>
      <Modal isOpen={openModal} setModalOpen={setOpenModal} id={id} />
    </ButtonContainer>
  );
}
