"use client";
import EditTaskModal from "@/components/EditTaskModal";
import { api } from "@/services/api";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-alpine.css"; // Theme
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { AgGridReact } from "ag-grid-react";
import { Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { ActionsContainer, Container, TasksListBox } from "./styles";

interface Task {
  id_task: string;
  title: string;
  description: string;
  deadline: string;
  status: string;
}

export default function Tasks({ params }: { params: { id: string } }) {
  const [selectedTask, setSelectedTask] = useState<
    Task | undefined
  >(undefined);
  const [openEditModal, setOpenEditModal] = useState(false);

  const DeleteTask = async (id: string) => {
    try {
      await api.delete(`/tasks/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const TaskActions = (props: any) => {
    const task = props.data;

    return (
      <ActionsContainer>
        <button
          onClick={() => {
            setSelectedTask(task);
            setOpenEditModal(true);
          }}
        >
          <Pencil />
        </button>

        <button
          onClick={() => {
            DeleteTask(task.id_task);
          }}
        >
          <Trash2 />
        </button>
      </ActionsContainer>
    );
  };

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
      field: "status",
      headerName: "Status",
    },
    {
      headerName: "Criado em",
      field: "created_at",
      sortable: true
    },
    {
      headerName: "Ações",
      field: "actions",
      cellRenderer: TaskActions,
    },
  ]);

  useEffect(() => {
    api.get(`/tasks`).then(response => {
      const responseData: any[] = response.data;
      setTasks(responseData);
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
      <EditTaskModal
        task={selectedTask}
        isOpen={openEditModal}
        setModalOpen={setOpenEditModal}
      />
    </Container>
  );
}