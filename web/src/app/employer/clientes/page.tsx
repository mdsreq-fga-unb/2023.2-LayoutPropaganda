"use client";
import { api } from "@/services/api";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-alpine.css"; // Theme
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import { Container, CustomerListBox } from "./styles";

interface Client {
    name: string;
    email: string;
    phone: string;
    message?: string;
    was_contacted: boolean;
    created_at: string
}

export default function Clients() {
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(() => {
        api.get('/contacts').then(response => {
            setClients(response.data);
            console.log(response.data)
        });
    }, []);

    const [columnDefs, setColumnDefs] = useState([
        {
            headerName: "Contatado?",
            field: "was_contacted",
        },
        {
            field: "name",
            headerName: "Nome",
        },
        {
            field: "email",
            headerName: "Email",
        },
        {
            field: "phone",
            headerName: "Telefone",
        },
        {
            headerName: "Mensagem",
            field: "message",
        },
        {
            headerName: "Data",
            field: "created_at",
            sortable: true
        },
    ]);

    return (
        <Container>
            <CustomerListBox>
                <div
                    className="ag-theme-alpine-dark"
                    style={{ height: "700px", width: "100%" }}
                >
                    <AgGridReact
                        columnDefs={columnDefs}
                        rowData={clients as any[]}
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
            </CustomerListBox>
        </Container>
    );
}