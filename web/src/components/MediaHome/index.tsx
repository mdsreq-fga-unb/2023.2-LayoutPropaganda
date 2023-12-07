"use client";

import { SwiperSlide } from "swiper/react";
import {
  MediaContainer,
  MediaContent,
  MediaContentButton,
  MediaContentCarrousel,
  MediaContentCarrouselItem,
  MediaContentCarrouselItemTitle,
  MediaContentMap,
  MediaTitle,
} from "./styles";

import Slider from "./slider";
import "./slider.css";

import Image from "next/image";
import image2 from "../../../public/assets/PainelDisponivel2.jpeg";
import image1 from "../../../public/assets/PainelDisponivel1.jpeg";
import image3 from "../../../public/assets/PainelDisponivel3.jpeg";
import image4 from "../../../public/assets/PainelDisponivel4.jpeg";
import image5 from "../../../public/assets/PainelDisponivel5.jpeg";
import LayoutMap from "../LayoutMap";

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
                <Image src={image1} alt="Images" height="378" width="238" />
                <MediaContentCarrouselItemTitle>
                  Triedo
                </MediaContentCarrouselItemTitle>
                <p>Ceilândia</p>
              </MediaContentCarrouselItem>
            </SwiperSlide>
            <SwiperSlide>
              <MediaContentCarrouselItem>
                <Image src={image2} alt="Images" height="378" width="238" />
                <MediaContentCarrouselItemTitle>
                  Front-Light
                </MediaContentCarrouselItemTitle>
                <p>Taguatinga norte</p>
              </MediaContentCarrouselItem>
            </SwiperSlide>
            <SwiperSlide>
              <MediaContentCarrouselItem>
                <Image src={image3} alt="Images" height="378" width="238" />
                <MediaContentCarrouselItemTitle>
                  Outdoor
                </MediaContentCarrouselItemTitle>
                <p>Santa Maria</p>
              </MediaContentCarrouselItem>
            </SwiperSlide>
            <SwiperSlide>
              <MediaContentCarrouselItem>
                <Image src={image4} alt="Images" height="378" width="238" />
                <MediaContentCarrouselItemTitle>
                  Triedo
                </MediaContentCarrouselItemTitle>
                <p>Candangolândia</p>
              </MediaContentCarrouselItem>
            </SwiperSlide>
            <SwiperSlide>
              <MediaContentCarrouselItem>
                <Image src={image5} alt="Images" height="378" width="238" />
                <MediaContentCarrouselItemTitle>
                  Front-Light
                </MediaContentCarrouselItemTitle>
                <p>Ponte Alta</p>
              </MediaContentCarrouselItem>
            </SwiperSlide>
          </Slider>
        </MediaContentCarrousel>
        <MediaContentButton href="/medias">Ver Todas</MediaContentButton>
      </MediaContent>
    </MediaContainer>
  );
};
