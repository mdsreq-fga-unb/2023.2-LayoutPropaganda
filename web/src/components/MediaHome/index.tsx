"use client"

import { SwiperSlide } from "swiper/react";
import {
    MediaContainer,
    MediaContent,
    MediaContentCarrousel,
    MediaContentCarrouselItem,
    MediaContentCarrouselItemTitle,
    MediaContentMap,
    MediaTitle, 
    MediaContentButton
} from "./styles";

import Slider from "./slider";
import './slider.css';

import Image from 'next/image';
import image2 from '../../../public/assets/gato 2.jpg';
import image1 from '../../../public/assets/gato1.jpg';
import image3 from '../../../public/assets/gato3.png';
import image4 from '../../../public/assets/gato4.jpg';
import image5 from '../../../public/assets/gato5.jpg';

export const Media = () => {

    const settings = {
        spaceBetween: 50,
        slidesPerView: 4,
        navigation: true,
        loop: true,
    };

    return (
        <MediaContainer id="Mídias">
            <MediaTitle>Mídias</MediaTitle>
            <MediaContent>
                <MediaContentMap>
                    //Espaco para o mapa
                </MediaContentMap>
                <MediaContentCarrousel>
                   <Slider settings={settings}>
                        <SwiperSlide>
                            <MediaContentCarrouselItem>
                                <Image src={image1} alt="Images" height="378" width="238"/>
                                <MediaContentCarrouselItemTitle>Gato 1</MediaContentCarrouselItemTitle>
                                <p>Um gatinho extremamente charmoso</p>
                            </MediaContentCarrouselItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MediaContentCarrouselItem>
                                <Image src={image2} alt="Images" height="378" width="238"/>
                                <MediaContentCarrouselItemTitle>Gato 2</MediaContentCarrouselItemTitle>
                                <p>Um gato completamente aesthetic</p>
                            </MediaContentCarrouselItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MediaContentCarrouselItem>
                                <Image src={image3} alt="Images" height="378" width="238"/>
                                <MediaContentCarrouselItemTitle>Gato 3</MediaContentCarrouselItemTitle>
                                <p>Apenas um gato</p>
                            </MediaContentCarrouselItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MediaContentCarrouselItem>
                                <Image src={image4} alt="Images" height="378" width="238"/>
                                <MediaContentCarrouselItemTitle>Gato 4</MediaContentCarrouselItemTitle>
                                <p>Gatinho cuti cuti</p>
                            </MediaContentCarrouselItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MediaContentCarrouselItem>
                                <Image src={image5} alt="Images" height="378" width="238"/>
                                <MediaContentCarrouselItemTitle>Gato 5</MediaContentCarrouselItemTitle>
                                <p>Bonito, mas nao tanto quanto a Charlotte</p>
                            </MediaContentCarrouselItem>
                        </SwiperSlide>
                   </Slider>
                </MediaContentCarrousel>
            <MediaContentButton>
                <h1>Ver Todas</h1>
            </MediaContentButton>
            </MediaContent>
        </MediaContainer>
    )
}