import styled from "styled-components";

export const TestButtonHover = styled.div`
  position: absolute;
  top: 30%;
  left: 30%;
  width: 500px;
  background-color: #000000;
  transition: background-color 0.3s ease;
  display: flex;

  &:hover {
    background-color: #ffffff;
  }
`;

export const Square = styled.div`
  width: 100px;
  height: 100px;
  background-color: #eee000;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffffff;
  }
`;
