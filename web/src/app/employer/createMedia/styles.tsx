import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MapContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const DataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  align-items: center;
`;

export const InfoForm = styled.form`
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

export const InfoFormFields = styled.div`
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

export const Select = styled.select`
  border: none;
  border-radius: 20px;
  background-color: #2b2b2b;
  margin: 0 auto;
  padding-left: 40px;
  text-align: center;
  width: 100%;
  height: 70px;
  font-size: 20px;
  &:focus {
    box-shadow: 0 0 17px rgba(0, 0, 0, 0.5);
    border: none;
    outline: none;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 20px;
  background-color: #2b2b2b;
  width: 100%;
  height: 70px;
  font-size: 20px;
  padding-left: 20px;
  margin: 0 auto;
  text-align: center;
  object-fit: cover;
  &:focus {
    box-shadow: 0 0 17px rgba(0, 0, 0, 0.5);
    border: none;
    outline: none;
  }
  &:placeholder {
    padding-left: 20px;
  }
`;

export const ImageUploadInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 200px;
  height: 200px;
  background-image: url("https://www.svgrepo.com/show/357902/image-upload.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 1px solid #2b2b2b;
  margin: 0 auto;
  overflow: hidden;

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`;

export const ImageUploadInputInput = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const ImageUploadInputHover = styled(ImageUploadInput)`
  background-color: #363636 !important;
`;

export const Images = styled.img``;

export const CreateButton = styled.button`
  border-radius: 20px;
  border: none;
  width: 30%;
  height: 70px;
  font-size: 30px;
  background-color: #2b2b2b;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  margin-top: 5%;
  margin: 0 auto;

  &:hover {
    background-color: #363636;
    color: #aa1a1a;
  }
`;
