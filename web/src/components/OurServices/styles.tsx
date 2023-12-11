import { devices } from '@/utils/devices';
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

  @media ${devices.mobileS} {
    font-size: 1.4rem;
    padding-top: 6rem;
  }
  @media ${devices.mobileM} {
    font-size: 1.8rem;
    padding-top: 3rem;
  }
  @media ${devices.mobileM} {
    font-size: 2rem;
    padding-top: 3rem;
  }
  @media ${devices.mobileM} {
    font-size: 2.5rem;
    padding-top: 3rem;
  }
`;

export const OurProductsContent = styled.div`
  width: 70%;
  border-radius: 20px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 2rem 0;
  padding: 2rem;
  box-shadow: 1px 0px 30.3px -1px #2d2d2d;
`;

export const OurProductsContentMedia = styled.div`
  font-size: 2.5rem; 
  color: #FFFFFF;
  width: 100%; 
  text-align: center;
  margin: 2rem;   
`;

export const OurProductsContentMediaTitle = styled.h1`
  font-weight: 900;
  color: #FFFFFF;
  @media ${devices.mobileS} {
    font-size: 1.2rem;
    margin: 0;
  }
  @media ${devices.laptopS} {
    font-size: 2.5rem;
  }
`


export const OurProductsContentParagraph = styled.p`
  color: #FFFFFF;
  font-size: 1.6rem; 
  text-align: justify;
  margin: 3rem; 
  font-weight: 550;

  @media ${devices.mobileS} {
    font-size: 1rem;
    margin: 1rem;
  }
  @media ${devices.laptopS} {
    font-size: 1.6rem;
    margin: 2rem;
  }
  
`;

export const OurProductsContentDivisoryBar = styled.div`
  width: 80%; 
  border-bottom: 2px solid #FFFFFF;
  margin: 4rem 0; 
`;

export const List = styled.ul`
  margin-left: 70px; 
  color: #FFFFFF;
  font-size: 1.6rem; 
  text-align: justify;
  font-weight: 200;

  @media ${devices.mobileS} {
    font-size: 1rem;
    margin-left: 0;
  }
  @media ${devices.laptopS} {
    font-size: 1.6rem;
    padding-left: 2rem;
  }
`;

const translate = {
  r: {
    x: '0%',
    y: '1%',
  },
  t: {
    x: '0%',
    y: '-1%',
  },
  b: {
    x: '0%',
    y: '1%',
  },
} as const;

export const OuterMedia = styled.div<{ direction: 'r' | 't' | 'b' }>`
  display: flex;
  flex-direction: row;
  padding: 2rem;

  @media ${devices.mobileS} {
    flex-direction: column;
    padding: 0;
  }

  @media ${devices.laptopS} {
    flex-direction: row;
    padding: 0;
  }

  > img {
    align-self: flex-start; 
    transform: translate(${({ direction }) => translate[direction].x + ',' + translate[direction].y});
    width: 300px; 
    height: 80%;
    border-radius: 15px;

    @media ${devices.mobileS} {
      width: 100px;
      height: 28%;
    }
    @media ${devices.mobileM} {
      width: 150px;
      height: 30%;
    }
    @media ${devices.tablet} {
      width: 200px;
      height: 35%;
    }
    @media ${devices.laptopS} {
      width: 300px;
      height: 70%;
    }
  }
`;
