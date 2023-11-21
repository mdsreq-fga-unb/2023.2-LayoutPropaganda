"use client";
import { Container, ContactListBox, ContactAtributeBox, ContactAtribute, ContactInfoBox } from "./styles"
import React from "react";

export default function Clients() {
    const contatos = [
        { id: 1, nome: "Gustavo Kenzo", email: "gkat@gmail.com", telefone: "(61) 98147-1212" },
        { id: 2, nome: "Gustavo Henrique", email: "gugabalatensa@gmail.com", telefone: "(61) 98166-6912"},
        { id: 3, nome: "Samuel Ricardo", email: "samucards@gmail.com", telefone: "(61) 98186-2937"},
        { id: 4, nome: "Manoel Felipe", email: "pernalongacomu@gmail.com", telefone: "(61) 98129-8108"},
    ];

    return (
        <Container>
            <ContactListBox>
                <ContactAtributeBox>
                    <ContactAtribute>Nome</ContactAtribute>
                    <ContactAtribute>Email</ContactAtribute>
                    <ContactAtribute>Telefone</ContactAtribute>
                </ContactAtributeBox>
                <ContactInfoBox>
                    <div background-color="#000000">Teste</div>
                </ContactInfoBox>
            </ContactListBox>
        </Container>
    );
}