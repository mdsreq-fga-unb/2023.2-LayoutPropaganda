"use client";
import { api } from "@/services/api";
import { useEffect, useRef, useState } from "react";
import {
  ActionsContainer,
  Container,
  CreateEmployeeButton,
  EmployerListBox,
  SearchEmployeeContainer,
  SearchEmployeeInput
} from "./styles";

import AddTaskModal from "@/components/addTaskModal";
import EditEmployeeModal from "@/components/editEmployeeModal";
import NewEmployeeModal from "@/components/newEmployeeModal";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-alpine.css"; // Theme
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import { LayoutList, Pencil, Trash2 } from "lucide-react";

interface Employee {
  id_employee: string;
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
  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(false);

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openTaskModal, setOpenTaskModal] = useState(false);

  const [employeeSearch, setEmployeeSearch] = useState<Employee[]>([]);
  const [search, setSearch] = useState("");
  const searchFuncion = (e: any) => {
    const { value } = e.target;
    setSearch(value);
    const filteredEmployees = employers.filter((employee) => {
      return (
        employee.first_name.toLowerCase().includes(value.toLowerCase()) ||
        employee.last_name.toLowerCase().includes(value.toLowerCase()) ||
        employee.email.toLowerCase().includes(value.toLowerCase()) ||
        employee.cpf.toLowerCase().includes(value.toLowerCase())
      );
    });
    setEmployeeSearch(filteredEmployees);
  };

  const gridRef = useRef<any>(null);
  const updateGridData = () => {
    if (gridRef.current && gridRef.current.api) {
      gridRef.current.api.refreshCells();
    }
  };

  const DeleteEmployee = async (id: string) => {
    try {
      await api.delete(`/employees/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const EmployeeActions = (props: any) => {
    const employee = props.data;

    return (
      <ActionsContainer>
        <button
          onClick={() => {
            setSelectedEmployee(employee);
            setOpenEditModal(true);
          }}
        >
          <Pencil />
        </button>

        <button
          onClick={() => {
            setSelectedEmployee(employee);
            setOpenTaskModal(true);
          }}
        >
          <LayoutList />
        </button> 

        <button
          onClick={() => {
            DeleteEmployee(employee.id_employee);
          }}
        >
          <Trash2 />
        </button>
      </ActionsContainer>
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
      cellRenderer: EmployeeActions,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
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
  }, [openCreateModal, openEditModal]);

  useEffect(() => {
    if (search === "") {
      setEmployeeSearch(employers);
    } else {
      setEmployeeSearch(employeeSearch);
    }
    updateGridData();
  }, [employers, search, DeleteEmployee]);

  return (
    <Container>
      <SearchEmployeeContainer>
        <SearchEmployeeInput
          value={search}
          onChange={searchFuncion}
          placeholder="Buscar funcionário"
        />
        <CreateEmployeeButton onClick={() => setOpenCreateModal(true)}>
          Criar funcionário
        </CreateEmployeeButton>
      </SearchEmployeeContainer>

      <EmployerListBox>
        <div
          className="ag-theme-alpine-dark"
          style={{ height: "700px", width: "100%" }}
        >
          <AgGridReact
            ref={gridRef}
            columnDefs={columnDefs}
            rowData={employeeSearch}
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
        isOpen={openCreateModal}
        setModalOpen={setOpenCreateModal}
      />

      <EditEmployeeModal
        employee={selectedEmployee}
        isOpen={openEditModal}
        setModalOpen={setOpenEditModal}
      />
      <AddTaskModal
        isOpen={openTaskModal}
        setModalOpen={setOpenTaskModal}
        employee={selectedEmployee}
      />
    </Container>
  );
}
