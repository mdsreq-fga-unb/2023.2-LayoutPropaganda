import { ContactsContainer, ContactsContent, ContactsTitle, ContactsContentBox, ContactInfoBox, ContactInfoType, ContactInfoTitle, ContactInfo, ContactMap, ContactMe } from "./styles"
import { useState } from "react";
import Modal from "./modal";

import Image from 'next/image';
import email from '../../../public/assets/o-email.png';
import telefone from '../../../public/assets/telefone.png';
import endereco from '../../../public/assets/endereco.png';

export const Contacts = () => {
    const [openModal, setOpenModal] = useState(false);
    return(
        <ContactsContainer id="Entrar em Contato">
            <ContactsTitle>Entrar em Contato</ContactsTitle>
            <ContactsContentBox>
                <ContactsContent>
                    <ContactInfoBox>

                        <ContactInfoTitle>Email</ContactInfoTitle>
                        <ContactInfoType>
                            <Image src={email} alt="Images" height="30" width="30"/>
                            <ContactInfo>
                                <p>edson@layoutpropaganda</p>
                            </ContactInfo>
                        </ContactInfoType>

                        <ContactInfoTitle>Telefone</ContactInfoTitle>
                        <ContactInfoType>
                            <Image src={telefone} alt="Images" height="30" width="30"/>
                            <ContactInfo>
                                <p>(61) 99626-9799</p>
                            </ContactInfo>
                        </ContactInfoType>

                        <ContactInfoTitle>Endereço</ContactInfoTitle>
                        <ContactInfoType>
                            <Image src={endereco} alt="Images" height="30" width="30"/>
                            <ContactInfo>
                                <p>Taguatinga Norte</p>
                            </ContactInfo>
                        </ContactInfoType>

                    </ContactInfoBox>
                    <ContactMap></ContactMap>
                </ContactsContent>
                <ContactMe onClick={() => setOpenModal(true)}>Quero que entrem em contato comigo</ContactMe>
                <Modal isOpen={openModal}></Modal>
            </ContactsContentBox>
        </ContactsContainer>
    )
}