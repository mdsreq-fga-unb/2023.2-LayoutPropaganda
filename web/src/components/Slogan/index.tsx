"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import SloganImage from '../../../public/assets/SloganImage.jpg'
import { ImageContainer, SloganContainer, SloganText, SloganTextSpan } from "./styles"

const animate = {
    hidden: {
        opacity: 0,
        y: '1em'
    },
    visible: {
        opacity: 1,
        y: '0em',
        transition: {
            duration: 1.5,
            ease:[0.2, 0.65, 0.3, 1]
        }
    }

}

export const Slogan = () => {
    return(
        <SloganContainer>
            <SloganText as={motion.div} initial={animate.hidden} whileInView={animate.visible}>
                MOSTRANDO <SloganTextSpan>AO MUNDO</SloganTextSpan>
                <br />
                <SloganText>
                O QUE VOCÊ CONSTRUIU
                </SloganText>
            </SloganText>
            <ImageContainer as={motion.div} animate={{y:100}}>
                <Image src={SloganImage} alt="Slogan" height={600} />
            </ImageContainer>
        </SloganContainer>
    )
}