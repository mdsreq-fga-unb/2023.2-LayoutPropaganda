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
import { useState } from "react";
import { api } from "@/services/api";
import { Info, InfoFields } from "./styles";

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

export default function ReadMedia() {
  return (
    <Container>
      <MapContainer>
        <LayoutMap center={{ lat: -15.832952, lng: -48.083647 }} />
      </MapContainer>
      <DataContainer>
        <Info>
          <InfoFields>description</InfoFields>
          <InfoFields>altura</InfoFields>
          <InfoFields>largura</InfoFields>
          <InfoFields>region</InfoFields>
          <InfoFields>type</InfoFields>
          <InfoFields>latitude</InfoFields>
          <InfoFields>longitude</InfoFields>
          <InfoFields>is_available</InfoFields>
        </Info>
      </DataContainer>
    </Container>
  );
}
