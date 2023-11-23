import styled from "styled-components";

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  width: 80%;
  height: 100%;
  background-color: #383838;
  border-radius: 20px;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const InfoFields = styled.label`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  width: 70%;
  gap: 20px;
  justify-content: center;
  align-items: stretch;
  margin: 0 auto;
  margin-top: 5%;
`;
