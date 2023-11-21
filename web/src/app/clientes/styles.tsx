import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const ContactListBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #878584;
    align-items: center;
    width: 90%;
    height: 700px;
    margin-top: 70px;
    border-radius: 25px;
    border-left: 8px solid #FF0000;
`

export const ContactAtributeBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 85%;
    font-size: 24px;
    border-bottom: 1px solid #000000;
    margin-top: 50px;
`

export const ContactAtribute = styled.p`
    width: 30%;
    margin-left: 23px;
    margin-bottom: 20px;
`

export const ContactInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    width: 85%;
    height: 500px;
    padding-top: 20px;
`