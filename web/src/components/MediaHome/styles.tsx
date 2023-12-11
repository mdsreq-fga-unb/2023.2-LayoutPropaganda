import { devices } from '@/utils/devices';
import Image from 'next/image';
import Link from 'next/link';
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

    @media ${devices.mobileS} {
        font-size: 1.8rem;
    }
    @media ${devices.mobileL} {
        font-size: 2rem;
    }
    @media ${devices.tablet} {
        font-size: 3rem;
    }
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
    width: 70%;
    height: 600px; 
    background-color: #FFFFFF;
    
    @media ${devices.mobileS} {
        width: 300px;
        height: 200px;
    }
    @media ${devices.mobileM} {
        width: 330px;
        height: 210px;
    }
    @media ${devices.mobileL} {
        width: 410px;
        height: 300px;
    }
    @media ${devices.tablet} {
        width: 680px;
        height: 460px;
    }
    @media ${devices.laptopS} {
        width: 950px;
        height: 580px;
    }
    @media ${devices.laptopS} {
        width: 1080px;
        height: 540px;
    }
`;

export const MediaContentCarrousel = styled.div`
    margin-top: 2rem;
    display: flex;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const MediaContentCarrouselItem = styled.div`
    @media ${devices.mobileS} {
        width: 150px;
        height:600px;
    }
`;


export const ImageContainer = styled.div`
    width: 238px;
    height: 378px;
    
`

export const MediaImage = styled(Image)`
    display: block;
    width: 100%;
    height: 100%;

    @media ${devices.mobileS} {
        width: 30%;
        height: 30%;
    }
    @media ${devices.mobileL} {
        width: 37%;
        height: 37%;
    }
    @media ${devices.tablet} {
        width: 65%;
        height: 65%;
    }
    @media ${devices.laptopS} {
        width: 75%;
        height: 75%;
    }
    @media ${devices.laptopM} {
        width: 100%;
        height: 100%;
    }
    
`

export const MediaContentCarrouselImage = styled.img`
    width: 19vw;
    height: 10vh;
`

export const MediaContentCarrouselItemTitle = styled.h3`
    color: #FFFFFF;
`

export const MediaContentButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #151515;
    font-size: 2rem;
    width: 220px;
    margin-top: 20px;
    margin-bottom: 70px;
    padding: 30px;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 1px 0px 30.3px -1px #2d2d2d;
    &:hover {
        background-color: #000000;
        box-shadow: 1px 0px 30.3px -1px #474747;
    }

    @media ${devices.mobileS} {
        font-size: 1.4rem;
        padding: 20px;
        width: 190px;
    }
    @media ${devices.tablet} {
        font-size: 2rem;
        padding: 20px;
        width: 220px;
    }
`;