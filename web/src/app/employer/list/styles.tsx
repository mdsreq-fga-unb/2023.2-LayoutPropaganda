import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const EmployerListBox = styled.div`
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

export const EmployerAtributeBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 85%;
  font-size: 24px;
  border-bottom: 1px solid #000000;
  margin-top: 50px;
`;

export const EmployerAtribute = styled.p`
  width: 30%;
  margin-left: 23px;
  margin-bottom: 20px;
`;

export const EmployerInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;
  padding-top: 20px;
`;

export const EmployerInfoLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 85%;
  font-size: 24px;
`;

export const EmployerAtributeName = styled.p`
  width: 450px;
  margin-left: 23px;
  margin-right: 10px;
  margin-bottom: 20px;
`;

export const EmployerAtributeEmail = styled.p`
  width: 460px;
  margin-bottom: 20px;
`;

export const EmployerAtributeTel = styled.p`
  margin-bottom: 20px;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 24px;
  height: 24px;
`;

export const SearchEmployeeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-between;
`;

export const CreateEmployeeButton = styled.button`
  width: 30%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #000000;
  background-color: #383838;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
`;

export const SearchEmployeeInput = styled.input`
  width: 60%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #000000;
  background-color: #383838;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 10px;
  font-size: 20px;
`;
