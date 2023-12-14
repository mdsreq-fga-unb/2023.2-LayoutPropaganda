import Image from "next/image";
import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  background-color: #383838;
  border-radius: 20px;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const SharedLineInfos = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
`;
export const SharedLineInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 48%;
  margin-bottom: 20px;
  gap: 16px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`;

export const InfoTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

export const InfoText = styled.p`
  font-size: 14px;
  color: #ffffff;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 400px;
  margin-top: 20px;
`;

export const ImageContainer = styled.div`
  height: 100%;
`;

export const MediaImage = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid #ffffff;
`;
