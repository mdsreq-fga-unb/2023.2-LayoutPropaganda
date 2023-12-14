import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CenterContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #383838;
  border-radius: 16px;
  padding: 16px;
`;

export const GraphContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #fff;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 16px;
`;

export const Button = styled.button`
  font-size: 18px;
  background-color: #151515;
  padding: 30px;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 1px 0px 30.3px -1px #2d2d2d;
  &:hover {
    background-color: #000000;
    box-shadow: 1px 0px 30.3px -1px #474747;
  }
  align-self: center;
  border: none;
  outline: none;
`;
