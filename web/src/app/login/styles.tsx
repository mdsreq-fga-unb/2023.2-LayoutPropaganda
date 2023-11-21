import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 88%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Form = styled.div`
  width: 50%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #2b2b2b;
  border-radius: 50px;
  background: linear-gradient(145deg, #272727, #2e2e2e);
  box-shadow: 20px 20px 60px #252525, -20px -20px 60px #313131;
`;

export const Image = styled.img`
  width: 400px;
  height: 700px;
  object-fit: cover;
  border-radius: 20px;
  position: absolute;
  bottom: 10%;
  right: 30%;
  z-index: -200;
`;

export const Fields = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 70px;
  padding-right: 70px;
`;

export const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
`;

export const Input = styled.input`
  background-color: #2b2b2b;
  width: 80%;
  height: 40px;
  border: none;
  border-bottom: 4px solid #fff;
  color: #fff;

  font-size: 24px;

  &:focus {
    outline: none;
    border-bottom: 4px solid red;
  }
`;

export const Button = styled.button`
  width: 50%;
  height: 70px;
  border: none;
  border-radius: 30px;
  border: 4px solid red;
  background: #2b2b2b;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 30px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #2b2b2b;
  }
`;
