"use client";
import { Container, ContactListBox, ContactAtributeBox, ContactAtribute, ContactInfoBox, ContactInfoLine, ContactAtributeName, ContactAtributeEmail, ContactAtributeTel, Checkbox } from "./styles"
import React from "react";

export default function Clients() {
    const contatos = [
        { id: 1, nome: "Gustavo Kenzo", email: "gkat@gmail.com", telefone: "(61) 98147-1212" },
        { id: 2, nome: "Gustavo Henrique", email: "gugabalatensa@gmail.com", telefone: "(61) 98166-6912"},
        { id: 3, nome: "Samuel Ricardo", email: "samucards@gmail.com", telefone: "(61) 98186-2937"},
        { id: 4, nome: "Manoel Felipe", email: "pernalongacomu@gmail.com", telefone: "(61) 98129-8108"},
        { id: 5, nome: "Gustavo Kenzo", email: "gkat@gmail.com", telefone: "(61) 98147-1212" },
        { id: 6, nome: "Gustavo Henrique", email: "gugabalatensa@gmail.com", telefone: "(61) 98166-6912"},
        { id: 7, nome: "Samuel Ricardo", email: "samucards@gmail.com", telefone: "(61) 98186-2937"},
        { id: 8, nome: "Manoel Felipe", email: "pernalongacomu@gmail.com", telefone: "(61) 98129-8108"},
        { id: 9, nome: "Gustavo Kenzo", email: "gkat@gmail.com", telefone: "(61) 98147-1212" },
        { id: 10, nome: "Gustavo Henrique", email: "gugabalatensa@gmail.com", telefone: "(61) 98166-6912"},
        { id: 11, nome: "Samuel Ricardo", email: "samucards@gmail.com", telefone: "(61) 98186-2937"},
        { id: 12, nome: "Manoel Felipe", email: "pernalongacomu@gmail.com", telefone: "(61) 98129-8108"},
        { id: 13, nome: "Gustavo Kenzo", email: "gkat@gmail.com", telefone: "(61) 98147-1212" },
        { id: 14, nome: "Gustavo Henrique", email: "gugabalatensa@gmail.com", telefone: "(61) 98166-6912"},
        { id: 15, nome: "Samuel Ricardo", email: "samucards@gmail.com", telefone: "(61) 98186-2937"},
        { id: 16, nome: "Manoel Felipe", email: "pernalongacomu@gmail.com", telefone: "(61) 98129-8108"},
        { id: 17, nome: "Gustavo Kenzo", email: "gkat@gmail.com", telefone: "(61) 98147-1212" },
        { id: 18, nome: "Gustavo Henrique", email: "gugabalatensa@gmail.com", telefone: "(61) 98166-6912"},
        { id: 19, nome: "Samuel Ricardo", email: "samucards@gmail.com", telefone: "(61) 98186-2937"},
        { id: 20, nome: "Manoel Felipe", email: "pernalongacomu@gmail.com", telefone: "(61) 98129-8108"},
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
                    {contatos.map((contato) => (
                        <div key={contato.id}>
                            <ContactInfoLine>
                                <Checkbox></Checkbox>
                                <ContactAtributeName>{contato.nome}</ContactAtributeName>
                                <ContactAtributeEmail>{contato.email}</ContactAtributeEmail>
                                <ContactAtributeTel>{contato.telefone}</ContactAtributeTel>
                            </ContactInfoLine>
                        </div>
                    ))}
                </ContactInfoBox>
            </ContactListBox>
        </Container>
    );
}