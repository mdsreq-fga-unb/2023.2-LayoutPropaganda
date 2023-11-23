import { useState } from "react";
import Modal from "./modal";
import {
  ContactInfo,
  ContactInfoBox,
  ContactInfoTitle,
  ContactInfoType,
  ContactMap,
  ContactMe,
  ContactsContainer,
  ContactsContent,
  ContactsContentBox,
  ContactsTitle,
} from "./styles";

import Image from "next/image";
import endereco from "../../../public/assets/endereco.png";
import email from "../../../public/assets/o-email.png";
import telefone from "../../../public/assets/telefone.png";
import LayoutMap from "../LayoutMap";

export const Contacts = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <ContactsContainer id="Entrar em Contato">
      <ContactsTitle>Entrar em Contato</ContactsTitle>
      <ContactsContentBox>
        <ContactsContent>
          <ContactInfoBox>
            <ContactInfoTitle>Email</ContactInfoTitle>
            <ContactInfoType>
              <Image src={email} alt="Images" height="30" width="30" />
              <ContactInfo>
                <p>edson@layoutpropaganda.com.br</p>
              </ContactInfo>
            </ContactInfoType>

            <ContactInfoTitle>Telefone</ContactInfoTitle>
            <ContactInfoType>
              <Image src={telefone} alt="Images" height="30" width="30" />
              <ContactInfo>
                <p>(61) 99626-9799</p>
              </ContactInfo>
            </ContactInfoType>

            <ContactInfoTitle>Endereço</ContactInfoTitle>
            <ContactInfoType>
              <Image src={endereco} alt="Images" height="30" width="30" />
              <ContactInfo>
                <p>Taguatinga Norte</p>
              </ContactInfo>
            </ContactInfoType>
          </ContactInfoBox>
          <ContactMap>
            <LayoutMap
              center={{ lat: -15.832952, lng: -48.083647 }}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </ContactMap>
        </ContactsContent>
        <ContactMe onClick={() => setOpenModal(true)}>
          Quero que entrem em contato comigo
        </ContactMe>
        <Modal
          isOpen={openModal}
          setModalOpen={() => setOpenModal(!openModal)}
        ></Modal>
      </ContactsContentBox>
    </ContactsContainer>
  );
};
