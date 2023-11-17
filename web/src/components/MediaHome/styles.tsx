import styled from 'styled-components';

export const MediaContainer = styled.div`
  width: 100%;
  margin-top: 20%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-sizing: border-box;
`;

export const MediaTitle = styled.h1`
    font-size: 3rem;
    font-weight: 900;
    color: #fff;
    padding-top: 1rem;
    text-align: center;
    border-bottom: solid #FFFFFF 2px;
`;

export const MediaContent = styled.div`
    background-color: #151515;
    width: 100%;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MediaContentMap = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 80%;
    height: 400px; //Lembrar de tirar o tamanho fixo quando colocar o mapa
    background-color: #FFFFFF;
`;