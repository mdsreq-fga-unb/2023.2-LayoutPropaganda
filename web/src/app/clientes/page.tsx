"use client";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Checkbox, ContactAtribute, ContactAtributeBox, ContactAtributeEmail, ContactAtributeName, ContactAtributeTel, ContactInfoBox, ContactInfoLine, ContactListBox, Container } from "./styles";

export default function Clients() {

    interface Client {
        name: string;
        email: string;
        phone: string;
        message?: string; 
    }
    
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(() => {
        api.get('/contacts').then(response => {
            const responseData: any[] = response.data;
        
            const formattedClients: Client[] = responseData.map(clientData => ({
                name: clientData.name,
                email: clientData.email,
                phone: clientData.phone,
                message: clientData.message || '' 
            }));
            setClients(formattedClients);
        });
    }, []);

    console.log(clients);
    return (
        <Container>
            <ContactListBox>
                <ContactAtributeBox>
                    <ContactAtribute>Nome</ContactAtribute>
                    <ContactAtribute>Email</ContactAtribute>
                    <ContactAtribute>Telefone</ContactAtribute>
                </ContactAtributeBox>
                <ContactInfoBox>
                    {clients.map((clients) => (
                        <div key={clients.email}>
                            <ContactInfoLine>
                                <Checkbox></Checkbox>
                                <ContactAtributeName>{clients.name}</ContactAtributeName>
                                <ContactAtributeEmail>{clients.email}</ContactAtributeEmail>
                                <ContactAtributeTel>{clients.phone}</ContactAtributeTel>
                            </ContactInfoLine>
                        </div>
                    ))}
                </ContactInfoBox>
            </ContactListBox>
        </Container>
    );
}