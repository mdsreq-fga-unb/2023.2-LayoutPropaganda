import styled from "styled-components";

export const MediaEditorMenu = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 30%;
`;

export const MediaImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  .image-swiper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .image-swiper-button-prev,
  .image-swiper-button-next {
    position: absolute;
    top: 50%;
    width: 30px;
    height: 30px;
    margin-top: -15px;
    background-color: #fff; /* Background color of the arrows */
    border-radius: 50%; /* Make it round */
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc; /* Border color */
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
`;

export const ButtonContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const CreateMediaButton = styled.button`
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

export const SearchBarContainer = styled.div`
  width: 40%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
