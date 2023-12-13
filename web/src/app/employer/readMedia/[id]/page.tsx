"use client";

import LayoutMap from "@/components/LayoutMap";
import { regions } from "@/utils/regions";
import {
  Container,
  MapContainer,
  DataContainer,
  CreateButton,
  InfoForm,
  Input,
  InfoFormFields,
  Select,
  Images,
  ImageUploadInputInput,
  ImageUploadInput,
  ImageUploadInputHover,
} from "../../createMedia/styles";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import {
  Info,
  InfoContainer,
  InfoText,
  InfoTitle,
  SharedLineInfo,
  SharedLineInfos,
} from "./styles";
import { useRouter } from "next/navigation";

interface IMediaImage {
  id_media_image: string;
  id_media: string;
  url: string;
  is_deleted: boolean;
  updated_at: Date;
  created_at: Date;
}
interface IMedia {
  id_media: string;
  type: string;
  region: string;
  description: string;
  latitude: number;
  longitude: number;
  is_deleted: boolean;
  is_available: boolean;
  updated_at: Date;
  created_at: Date;
  MediaImages: IMediaImage[];
}

export default function ReadMedia({ params }: { params: { id: string } }) {
  const [media, setMedia] = useState<IMedia>({
    id_media: "",
    type: "",
    region: "",
    description: "",
    latitude: 0,
    longitude: 0,
    is_deleted: false,
    is_available: false,
    updated_at: new Date(),
    created_at: new Date(),
    MediaImages: [],
  });

  const getMedia = async (id: string): Promise<IMedia> => {
    const response = await api.get("/medias/" + id);
    return response.data;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMedia(params.id);

        setMedia(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <MapContainer>
        <LayoutMap center={{ lat: -15.832952, lng: -48.083647 }} />
      </MapContainer>
      <DataContainer>
        <InfoContainer>
          <SharedLineInfos>
            <SharedLineInfo>
              <InfoTitle>Tipo</InfoTitle>
              <InfoText>{media.type}</InfoText>
            </SharedLineInfo>
            <SharedLineInfo>
              <InfoTitle>Região</InfoTitle>
              <InfoText>{media.region}</InfoText>
            </SharedLineInfo>
          </SharedLineInfos>
          <SharedLineInfos>
            <SharedLineInfo>
              <InfoTitle>Latitude</InfoTitle>
              <InfoText>{media.latitude}</InfoText>
            </SharedLineInfo>
            <SharedLineInfo>
              <InfoTitle>Longitude</InfoTitle>
              <InfoText>{media.longitude}</InfoText>
            </SharedLineInfo>
          </SharedLineInfos>
          <Info>
            <InfoTitle>Descrição</InfoTitle>
            <InfoText>{media.description}</InfoText>
          </Info>
        </InfoContainer>
      </DataContainer>
    </Container>
  );
}
