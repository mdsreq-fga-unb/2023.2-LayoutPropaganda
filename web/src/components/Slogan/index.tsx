"use client"
import Image from 'next/image'
import SloganImage from '../../../public/assets/SloganImage.jpg'
import { ImageContainer, SloganContainer, SloganText, SloganTextSpan } from "./styles"

export const Slogan = () => {
    return(
        <SloganContainer>
            <SloganText>
                MOSTRANDO <SloganTextSpan>AO MUNDO</SloganTextSpan>
                <br />
                <SloganText>
                O QUE VOCÊ CONSTRUIU
                </SloganText>
            </SloganText>
            <ImageContainer>
                <Image src={SloganImage} alt="Slogan" height={600} />
            </ImageContainer>
        </SloganContainer>
    )
}