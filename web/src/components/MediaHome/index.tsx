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

  // const [imageWidth, setImageWidth] = useState(238);
  // const [imageHeight, setImageHeight] = useState(378);
  
  
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
                  Triedo
                </MediaContentCarrouselItemTitle>
                <p>Ceilândia</p>
              </MediaContentCarrouselItem>
            </SwiperSlide>
            <SwiperSlide>
              <MediaContentCarrouselItem>
                <ImageContainer>
                <MediaImage src={image2} alt="Images" width={100} height={100}  />
                </ImageContainer>
                <MediaContentCarrouselItemTitle>
                  Front-Light
                </MediaContentCarrouselItemTitle>
                <p>Taguatinga norte</p>
              </MediaContentCarrouselItem>
            </SwiperSlide>
            <SwiperSlide>
              <MediaContentCarrouselItem>
                <ImageContainer>
                <MediaImage src={image3} alt="Images"/>
                </ImageContainer>
                <MediaContentCarrouselItemTitle>
                  Outdoor
                </MediaContentCarrouselItemTitle>
                <p>Santa Maria</p>
              </MediaContentCarrouselItem>
            </SwiperSlide>
            <SwiperSlide>
              <MediaContentCarrouselItem>
                <ImageContainer>
                <MediaImage src={image4} alt="Images" width={100} height={100}  />
                </ImageContainer>
                <MediaContentCarrouselItemTitle>
                  Triedo
                </MediaContentCarrouselItemTitle>
                <p>Candangolândia</p>
              </MediaContentCarrouselItem>
            </SwiperSlide>
            <SwiperSlide>
              <MediaContentCarrouselItem>
                <ImageContainer>
                <MediaImage src={image5} alt="Images" width={100} height={100}  />
                </ImageContainer>
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
