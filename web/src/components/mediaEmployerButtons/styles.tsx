import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 500px;
  padding: 150px;
  background-color: #3a3838;
  border-radius: 24px;
  z-index: 1000;
`;
export const ModalHeader = styled.div`
  position: fixed;
  top: 25px;
  left: 225px;
  transform: translate(-50%, -50%);
  color: #000000;
  background-color: #0d0d0d;
  width: 450px;
  height: 50px;
  padding: 13px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  border-bottom: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 24px;
`;

export const IconButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  font-size: 24px;
  background-color: transparent;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 400px;
`;

export const Title = styled.h1`
  color: #fff;
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

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  gap: 16px;
`;

export const ModalText = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

export const DeleteButton = styled.button`
  width: 60%;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: #363636;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  color: #ff0000;
  font-size: 20px;
  &:hover {
    background-color: #ff0000;
    color: #363636;
    cursor: pointer;
  }
`;
export const CancelButton = styled.button`
  width: 60%;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: #363636;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  color: #ffffff;
  font-size: 20px;
  &:hover {
    background-color: #ff0000;
    color: #363636;
    cursor: pointer;
  }
`;
