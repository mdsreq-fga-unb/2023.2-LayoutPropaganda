import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const TasksListBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2d2d2d;
  align-items: center;
  width: 70%;
  min-height: 700px;
  border-radius: 25px;
  border-left: 8px solid #ff0000;
  overflow: hidden;
`;