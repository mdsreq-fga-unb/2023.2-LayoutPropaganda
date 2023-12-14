"use client";
import { api } from "@/services/api";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-alpine.css"; // Theme
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import { Container, TasksListBox } from "./styles";

interface Task {
    title: string;
    description: string;
    deadline: string;
    status: string;
}

export default function Tasks({params}: {params: {id: string}}) {
    const [tasks, setTasks] = useState<Task[]>([]);

    const [columnDefs, setColumnDefs] = useState([
        {
            field: "title",
            headerName: "Titulo",
        },
        {
            field: "description",
            headerName: "Descrição",
        },
        {
            field: "deadline",
            headerName: "Prazo",
            sortable: true
        },
        {
            field: "Status",
            headerName: "status",
        },
        {
            headerName: "Criado em",
            field: "created_at",
            sortable: true
        },
    ]);

    useEffect(() => {
        api.get(`/tasks`).then(response => {
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
            <TasksListBox>
                <div
                    className="ag-theme-alpine-dark"
                    style={{ height: "700px", width: "100%" }}
                >
                    <AgGridReact
                        columnDefs={columnDefs}
                        rowData={tasks as any[]}
                        // pagination={true}
                        // paginationPageSize={10}
                        autoSizeStrategy={{
                            type: "fitGridWidth",
                            defaultMinWidth: 100,
                            columnLimits: [
                                {
                                    colId: "message",
                                    minWidth: 1500,
                                },
                            ],
                        }}
                        overlayNoRowsTemplate={
                            "Não foi possível encontrar nenhum dado, tente novamente mais tarde"
                        }
                    />
                </div>
            </TasksListBox>
        </Container>
    );
}