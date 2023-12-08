import { devices } from "@/utils/devices";
import styled from "styled-components";

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
`;

export const ContactsTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: #fff;
  padding-top: 1rem;
  text-align: center;
  border-bottom: solid #ffffff 2px;
  margin-bottom: 2rem;

  @media ${devices.mobileS} {
    font-size: 1.8rem;
  }
  @media ${devices.mobileL} {
    font-size: 2rem;
  }
  @media ${devices.tablet} {
    font-size: 2.4rem;
  }
  @media ${devices.laptopS} {
    font-size: 2.8rem;
  }
`;

export const ContactsContentBox = styled.div`
  background-color: #202020;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContactsContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media ${devices.mobileS} {
    flex-direction: column;
  }

  @media ${devices.tablet} {
    flex-direction: row;
  }
`;

export const ContactInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 35%;
  padding: 30px;
  margin-left: 30px;
`;

export const ContactInfoType = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  @media ${devices.mobileS} {
    align-items: center;
}
`;

export const ContactInfoTitle = styled.h2`
  font-size: 36px;
  font-weight: 900;

  @media ${devices.mobileS} {
    font-size: 1.3rem;
  }
`;

export const ContactInfo = styled.div`
  font-size: 26px;
  margin-left: 15px;
  margin-top: 15px;

  @media ${devices.mobileS} {
    font-size: 1rem;
  }
  @media ${devices.tablet} {
    font-size: 1.4rem;
  }
  @media ${devices.laptopS} {
    font-size: 1.6rem;
  }
  
`;

export const ContactMap = styled.div`
  height: 400px;
  margin-top: 80px;
  margin-bottom: 100px;
  margin-right: 80px;

  @media ${devices.mobileS} {
    width: 400px;
    height: 200px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  @media ${devices.tablet} {
    width: 660px;
    height: 380px;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
  }
`;

export const ContactMe = styled.button`
  font-size: 36px;
  background-color: #151515;
  padding: 30px;
  border-radius: 25px;
  cursor: pointer;
    box-shadow: 1px 0px 30.3px -1px #2d2d2d;
    &:hover {
        background-color: #000000;
        box-shadow: 1px 0px 30.3px -1px #474747;
    }
  width: fit-content;
  align-self: center;
  margin-bottom: 70px;
  margin-top: 20px;
  border: none;
  outline: none;

  @media ${devices.mobileS} {
    font-size: 1rem;
    padding: 20px;
    width: 230px;
  }
  @media ${devices.tablet} {
    font-size: 1.4rem;
    padding: 20px;
    width: 330px;
  }
  @media ${devices.laptopS} {
    font-size: 1.6rem;
    padding: 20px;
    width: 390px;
  }
`;
