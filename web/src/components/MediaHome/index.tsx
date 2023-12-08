"use client";

import { SwiperSlide } from "swiper/react";
import {
  ImageContainer,
  MediaContainer,
  MediaContent,
  MediaContentButton,
  MediaContentCarrousel,
  MediaContentCarrouselItem,
  MediaContentCarrouselItemTitle,
  MediaContentMap,
  MediaImage,
  MediaTitle
} from "./styles";

import Slider from "./slider";
import "./slider.css";

import { useState } from "react";
import image2 from "../../../public/assets/gato 2.jpg";
import image1 from "../../../public/assets/gato1.jpg";
import image3 from "../../../public/assets/gato3.png";
import image4 from "../../../public/assets/gato4.jpg";
import image5 from "../../../public/assets/gato5.jpg";
import LayoutMap from "../LayoutMap";

export const Media = () => {
  const settings = {
    spaceBetween: 50,
    slidesPerView: 4,
    navigation: true,
    loop: true,
  };

  const [imageWidth, setImageWidth] = useState(238);
  const [imageHeight, setImageHeight] = useState(378);
  
  
  // useEffect(() => {

  //     if( typeof window !== undefined) {
    
  //       if(window.innerWidth < sizesNumber.laptopS) {

  //         setImageWidth(119)
  //         setImageHeight(189)
          

  //       }
    
    
  //     }

  // },[window.innerWidth])
  

  return (
    <MediaContainer id="Mídias">
      <MediaTitle>Mídias</MediaTitle>
      <MediaContent>
        <MediaContentMap>
          <LayoutMap
            center={{ lat: -15.832952, lng: -48.083647 }}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </MediaContentMap>
        <MediaContentCarrousel>
          <Slider settings={settings}>
            <SwiperSlide>
              <MediaContentCarrouselItem>
                <ImageContainer>
                <MediaImage src={image1} alt="Images" width={100} height={100}   />
                </ImageContainer>
                <MediaContentCarrouselItemTitle>
                  Gato 1
                </MediaContentCarrouselItemTitle>
                <p>Um gatinho extremamente charmoso</p>
              </MediaContentCarrouselItem>
            </SwiperSlide>
            <SwiperSlide>
              <MediaContentCarrouselItem>
                <ImageContainer>
                <MediaImage src={image2} alt="Images" width={100} height={100}  />
                </ImageContainer>
                <MediaContentCarrouselItemTitle>
                  Gato 2
                </MediaContentCarrouselItemTitle>
                <p>Um gato completamente aesthetic</p>
              </MediaContentCarrouselItem>
            </SwiperSlide>
            <SwiperSlide>
              <MediaContentCarrouselItem>
                <ImageContainer>
                <MediaImage src={image3} alt="Images"/>
                </ImageContainer>
                <MediaContentCarrouselItemTitle>
                  Gato 3
                </MediaContentCarrouselItemTitle>
                <p>Apenas um gato</p>
              </MediaContentCarrouselItem>
            </SwiperSlide>
            <SwiperSlide>
              <MediaContentCarrouselItem>
                <ImageContainer>
                <MediaImage src={image4} alt="Images" width={100} height={100}  />
                </ImageContainer>
                <MediaContentCarrouselItemTitle>
                  Gato 4
                </MediaContentCarrouselItemTitle>
                <p>Gatinho cuti cuti</p>
              </MediaContentCarrouselItem>
            </SwiperSlide>
            <SwiperSlide>
              <MediaContentCarrouselItem>
                <ImageContainer>
                <MediaImage src={image5} alt="Images" width={100} height={100}  />
                </ImageContainer>
                <MediaContentCarrouselItemTitle>
                  Gato 5
                </MediaContentCarrouselItemTitle>
                <p>Bonito, mas nao tanto quanto a Charlotte</p>
              </MediaContentCarrouselItem>
            </SwiperSlide>
          </Slider>
        </MediaContentCarrousel>
        <MediaContentButton href="/medias">Ver Todas</MediaContentButton>
      </MediaContent>
    </MediaContainer>
  );
};
