import styled from 'styled-components';

export const OurProductsContainer = styled.div`
  width: 100%;
  margin-top: 15%; 
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const OurProductsTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: #fff;
  padding-top: 3rem;
  text-align: center;
  border-bottom: 2px solid #FFFFFF;
  margin-bottom: 2rem; 
`;

export const OurProductsContent = styled.div`
  width: 70%;
  border-radius: 20px;
  background-color: #1A1A1A;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 2rem 0;
  padding: 2rem;
`;

export const OurProductsContentMedia = styled.div`
  font-size: 2.5rem; 
  font-weight: 450;
  color: #FFFFFF;
  width: 100%; 
  text-align: center;
  margin: 2rem 0; 
`;

export const OurProductsContentParagraph = styled.p`
  color: #FFFFFF;
  font-size: 1.6rem; 
  text-align: justify;
  margin: 1rem 0; 
`;

export const OurProductsContentDivisoryBar = styled.div`
  width: 80%; 
  border-bottom: 2px solid #FFFFFF;
  margin: 1rem 0; 
`;

export const List = styled.ul`
  margin-left: 70px; 
  color: #FFFFFF;
  font-size: 1.6rem; 
  text-align: justify;
`;

const translate = {
  r: {
    x: '50%',
    y: '0',
  },
  t: {
    x: '-50%',
    y: '-30%',
  },
  b: {
    x: '-50%',
    y: '30%',
  },
} as const;

export const OuterMedia = styled.div<{ direction: 'r' | 't' | 'b' }>`
  display: flex;
  flex-direction: row;

  > img {
    transform: translate(${({ direction }) => translate[direction].x + ',' + translate[direction].y});
    width: 40%; 
    height: 80%;
  }
`;
