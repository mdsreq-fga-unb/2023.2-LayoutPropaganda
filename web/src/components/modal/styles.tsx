import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  top: 20%;
  left: 30%;
  width: 40%;
  background-color: #3a3838;
  border-radius: 24px;
  padding-bottom: 20px;
  overflow: hidden;
  z-index: 1000;
`;

export const ModalHeader = styled.div`
  color: #000000;
  background-color: #0d0d0d;
  height: 50px;
  width: 100%;
  padding: 13px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 24px;
`;

export const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  width: 50px;
  font-weight: 500;
  font-size: 24px;
  background-color: transparent;
`;

export const Title = styled.h1`
  color: #fff;
  font-weight: 500;
  font-size: 24px;
`;
