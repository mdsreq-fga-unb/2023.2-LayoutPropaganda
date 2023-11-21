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
    border-bottom: solid #FFFFFF 2px;
    margin-bottom: 2rem;
`;

export const ContactsContentBox = styled.div`
    background-color: #151515;
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
    align-items: end;
    margin-bottom: 20px;
`;

export const ContactInfoTitle = styled.h2`
    font-size: 36px;
`;

export const ContactInfo = styled.div`
    font-size: 26px;
    margin-left: 15px;
    margin-top: 15px;
`

export const ContactMap = styled.div`
    width: 40%;
    height: 300px;
    margin-top: 80px;
    margin-bottom: 100px;
    margin-right: 80px;
`;

export const ContactMe = styled.button`
    font-size: 36px;
    background-color: #2B2B2B;
    padding: 30px;
    border-radius: 25px;
    cursor: pointer;
    width: fit-content;
    align-self: center;
    margin-bottom: 70px;
    margin-top: 20px;
    border: none;
    outline: none;
`;