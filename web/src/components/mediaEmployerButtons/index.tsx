import { BookOpenText, PenSquare, Receipt, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";
import DeleteModal from "./modal";
import { CashFlowInputs, IconButton, Input } from "./styles";
import Modal from "../modal";
import { api } from "@/services/api";
import { IMedia } from "@/types/media";
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`;

// const createMediaCashFlowBodySchema = z.object({
//   description: z.string(),
//   reference_date: z.date(),
//   quantity: z.number(),
// });

export default function MediaEmployerButtons({
  id,
  setMedias,
}: {
  id: string;
  setMedias: (data: IMedia[]) => void;
}) {
  const router = useRouter();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openCashFlowModal, setOpenCashFlowModal] = useState(false);

  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [referenceDate, setReferenceDate] = useState(new Date());

  const handleSubmitCashFlow = async () => {
    try {
      await api.post("/medias/cashFlow/" + id, {
        quantity,
        description,
        reference_date: referenceDate,
      });
      alert("Fluxo de caixa adicionado com sucesso");
      setOpenCashFlowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ButtonContainer>
      <PenSquare onClick={() => router.push("/employer/editMedia/" + id)} />
      <IconButton onClick={() => router.push("/employer/readMedia/" + id)}>
        <BookOpenText color="#22d422" />
      </IconButton>
      <IconButton onClick={() => setOpenCashFlowModal(true)}>
        <Receipt color="#e7ff0b" />
      </IconButton>
      <IconButton onClick={() => setOpenDeleteModal(true)}>
        <Trash2 color="#bd0e0e" />
      </IconButton>
      <DeleteModal
        isOpen={openDeleteModal}
        setModalOpen={setOpenDeleteModal}
        id={id}
        setMedias={setMedias}
      />
      <Modal
        isOpen={openCashFlowModal}
        setModalOpen={setOpenCashFlowModal}
        title="Adicionar fluxo de caixa"
      >
        <CashFlowInputs>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            type="date"
            onChange={(e) => setReferenceDate(new Date(e.target.value))}
          />
          <button onClick={handleSubmitCashFlow}>Adicionar</button>
        </CashFlowInputs>
      </Modal>
    </ButtonContainer>
  );
}
