import styled from 'styled-components';

export const OurProductsContainer = styled.div`
  width: 100%;
  margin-top: 20%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-sizing: border-box;
`;

export const OurProductsTitle = styled.h1`
    font-size: 3rem;
    font-weight: 900;
    color: #fff;
    padding-top: 1rem;
    text-align: center;
    border-bottom: solid #FFFFFF 2px;
`;

export const OurProductsContent = styled.div`
  width: 70%;
  height: fit-content;
  margin-top: 5rem;
  border-radius: 20px;
  background-color: #1A1A1A;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-sizing: border-box;
`;

export const OurProductsContentMedia = styled.div`
  font-size: 40px;
  font-weight: 450;
  font-family: Georgia, serif;
  color: #FFFFFF;
  width: 500px;
  position: static;
  margin-top: 40px;
  margin-left: 80px;
  margin-right: 80px;
`;

export const OurProductsContentParagraph = styled.p`
  color: #FFFFFF;
  font-size: 20px;
  text-align: justify;
`;

export const OurProductsContentDivisoryBar = styled.div`
  height: 50px;
  width: 500px;
  justify-self: center;
  border-bottom: solid #FFFFFF 2px;
  margin-bottom: 50px;
`;

export const List = styled.ul`
  margin-left: 40px;
`;

export const OuterMedia = styled.div`
  display: flex;
  flex-direction: row;
`;