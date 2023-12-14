import styled from "styled-components";

export const ModalContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  width: 80%;
`;

export const TextBox = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #9c9c9c;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease;

  color: #000000;
  padding-left: 8px;

  &:focus {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  }

  &::placeholder {
    color: #00000066;
  }
`;

export const ErrorMessage = styled.p`
  color: #fc5151;
  font-size: 12px;
  margin-top: 4px;
`;

export const SharedLineTextBoxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const SharedLineTextBox = styled(TextBox)`
  width: 48%;
`;

export const TextBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
`;

export const Message = styled.input`
  display: flex;
  width: 100%;
  height: 120px;
  justify-items: start;
  outline: none;
  border: solid 1px #de8983;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;
`;

export const SubmitButton = styled.button`
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
