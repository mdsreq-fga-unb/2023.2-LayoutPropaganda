import styled from "styled-components";

export const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800px;
  border-radius: 20px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  gap: 20px;
`;

export const DateDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  gap: 4px;
`;

export const DateTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

export const DateInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 0;
  padding: 0 16px;
  background-color: #fff;
  color: #000;

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`;
