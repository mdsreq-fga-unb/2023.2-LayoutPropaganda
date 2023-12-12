"use client";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import {
  Checkbox,
  EmployerAtribute,
  EmployerAtributeBox,
  EmployerAtributeEmail,
  EmployerAtributeName,
  EmployerAtributeTel,
  EmployerInfoBox,
  EmployerInfoLine,
  EmployerListBox,
  Container,
} from "./styles";

import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import "ag-grid-community/styles/ag-theme-alpine.css"; // Theme
import { Pencil } from "lucide-react";
import NewEmployeeModal from "@/components/newEmployeeModal";

// [
// 	{
// 		"id_employee": "d222abb0-54ef-46c5-a25b-7f3c58f0c49d",
// 		"first_name": "John",
// 		"last_name": "Doe",
// 		"email": "jhondoe@gmail.com",
// 		"cpf": "12345678910",
// 		"password": "$2b$12$x6oayb.tWvL43aj7d1yMu.BKAtgSL2IQ/3IaK00/buYD/d7BOChqO",
// 		"is_deleted": false,
// 		"updated_at": "2023-12-07T00:23:08.271Z",
// 		"created_at": "2023-12-07T00:23:08.271Z"
// 	}
// ]

interface Employee {
  first_name: string;
  last_name: string;
  email: string;
  cpf: string;
  is_deleted: boolean;
  updated_at: string;
  created_at: string;
}

export default function Employers() {
  const [employers, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(false);

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const EditEmployeeButton = () => {
    // props is ICellRenererParams. See:
    // https://www.ag-grid.com/react-grid/component-cell-renderer/#cell-renderer-component-2

    return (
      <>
        <button onClick={() => setOpenEditModal(true)}>
          <Pencil />
        </button>
      </>
    );
  };

  const autoSizeStrategy = {
    type: "fitGridWidth",
    defaultMinWidth: 100,
    columnLimits: [
      {
        colId: "country",
        minWidth: 900,
      },
    ],
  };

  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "nome",
      valueGetter: "data.first_name + ' ' + data.last_name",
    },
    {
      field: "email" as keyof Employee,
      sortable: true,
      filter: true,
      headerName: "Email",
    },
    {
      field: "cpf" as keyof Employee,
      sortable: true,
      filter: true,
      headerName: "CPF",
    },
    {
      headerName: "Ações",
      field: "actions",
      cellRenderer: EditEmployeeButton,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/employees");
        setEmployees(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <EmployerListBox>
        <div
          className="ag-theme-alpine-dark"
          style={{ height: "700px", width: "100%" }}
        >
          <AgGridReact
            columnDefs={columnDefs}
            rowData={employers}
            pagination={true}
            paginationPageSize={10}
            autoSizeStrategy={autoSizeStrategy}
            overlayNoRowsTemplate={
              "Não foi possível encontrar nenhum dado, tente novamente mais tarde"
            }
          />
        </div>
      </EmployerListBox>

      <NewEmployeeModal
        isOpen={openEditModal}
        setModalOpen={setOpenEditModal}
      />
    </Container>
  );
}
