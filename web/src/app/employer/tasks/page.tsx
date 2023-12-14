"use client";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Checkbox, ContactAtribute, ContactAtributeBox, ContactAtributeEmail, ContactAtributeName, ContactAtributeTel, ContactInfoBox, ContactInfoLine, ContactListBox, Container } from "../clientes/styles";

interface Task {
    title: string;
    description: string;
    deadline: string;
    status: string;
}

export default function Tasks({params}: {params: {id: string}}) {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        api.get(`/tasks/${params.id}`).then(response => {
            const responseData: any[] = response.data;
        
            const formattedTasks: Task[] = responseData.map(Tasks => ({
                title: Tasks.title,
                description: Tasks.description,
                deadline: Tasks.deadline,
                status: Tasks.status,
            }));
            setTasks(formattedTasks);
        });
    }, []);

    return (
        <Container>
            <ContactListBox>
                <ContactAtributeBox>
                    <ContactAtribute>Tarefas</ContactAtribute>
                    <ContactAtribute>Detalhes</ContactAtribute>
                    <ContactAtribute>Prazo</ContactAtribute>
                    <ContactAtribute>Status</ContactAtribute>
                </ContactAtributeBox>
                <ContactInfoBox>
                    {tasks.map((tasks) => (
                        <div key={tasks.}>
                            <ContactInfoLine>
                                <Checkbox></Checkbox>
                                <ContactAtributeName>{tasks.name}</ContactAtributeName>
                                <ContactAtributeEmail>{tasks.email}</ContactAtributeEmail>
                                <ContactAtributeTel>{tasks.phone}</ContactAtributeTel>
                            </ContactInfoLine>
                        </div>
                    ))}
                </ContactInfoBox>
            </ContactListBox>
        </Container>
    );
}