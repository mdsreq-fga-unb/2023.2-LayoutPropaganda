import { devices } from "@/utils/devices";
import styled from "styled-components";

export const SloganContainer  = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
   
`

export const SloganText = styled.p`
    color: #fff;
    font-weight: 900;
    font-size: 3rem;
    margin-left: 10rem;

    @media ${devices.tablet} {
        font-size: 1.8rem;
        margin-left: 5rem;
        padding-top: 0.5rem;
    }
    @media ${devices.laptopS} {
        font-size: 2rem;
        margin-left: 5rem;
        padding-top: 0.5rem;
    }
    @media ${devices.laptopM} {
        font-size: 2.5rem;
        margin-left: 7rem;
        padding-top: 0.5rem;
        
    }
    @media ${devices.laptopL} {
       font-size: 3rem;
       margin-left: 10rem;
       padding-top: 1rem;

    }
`

export const SloganTextSpan = styled.span`
    background: linear-gradient(90deg, rgba(134,43,43,1) 0%, rgba(255,0,0,1) 52%, rgba(125,11,11,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 3rem;
    font-weight: 900;
    padding-top: 2rem;

    @media ${devices.tablet} {
        font-size: 1.8rem;
    }
    @media ${devices.laptopS} {
        font-size: 2rem;
    }
    @media ${devices.laptopM} {
        font-size: 2.5rem;
    }
    @media ${devices.laptopL} {
       font-size: 3rem;
    }
`;


export const ImageContainer = styled.div`
    width: 40%;
    margin-left: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;

    @media ${devices.laptopS} {
        width: 28%;
        margin-left: 8%;
        height: 90%;
    }
    @media ${devices.laptopM} {
        width: 28%;
        margin-left: 7%;
        height: 100%;
    }
    @media ${devices.laptopL} {
        width: 28%;
        height: 100%;
    }
    > img {
        border-radius: 30px;
        overflow: hidden;
        box-shadow: 1px 0px 49.3px -3px #717171;
        width: 100%; 

        @media ${devices.laptopS} {
            height: 100%;
        }
    }
`;






