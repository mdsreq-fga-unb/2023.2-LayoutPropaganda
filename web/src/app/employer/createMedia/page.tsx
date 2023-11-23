"use client";

import LayoutMap from "@/components/LayoutMap";
import { api } from "@/services/api";
import { regions } from "@/utils/regions";
import { useState } from "react";
import {
  Container,
  CreateButton,
  DataContainer,
  ImageUploadInput,
  ImageUploadInputInput,
  InfoForm,
  InfoFormFields,
  Input,
  MapContainer,
  Select
} from "./styles";

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

export default function CreateMedia() {
  const [description, setDescription] = useState("");
  const [region, setRegion] = useState("");
  const [type, setType] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [is_available, setIsAvailable] = useState("");
  const [largura, setLargura] = useState(0);
  const [altura, setAltura] = useState(0);
  const [image1, setImage1] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const file = e.target.files?.[0];
    // if (file) {
    //   setPreviewImage(URL.createObjectURL(file));
    // } else {
    //   setPreviewImage(null);
    // }
    if (name === "description") {
      setDescription(value);
    }
    if (name === "region") {
      setRegion(value);
    }
    if (name === "type") {
      setType(value);
    }
    if (name === "latitude") {
      setLatitude(Number(value));
    }
    if (name === "longitude") {
      setLongitude(Number(value));
    }
    if (name === "largura") {
      setLargura(Number(value));
    }
    if (name === "altura") {
      setAltura(Number(value));
    }
    if (name === "image1") {
      setImage1(value);
      console.log({ value });
    }
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "region") {
      setRegion(value);
    }
    if (name === "type") {
      setType(value);
    }
    if (name === "is_available") {
      setIsAvailable(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      description,
      altura,
      largura,
      region,
      type,
      latitude,
      longitude,
      is_available,
      media: [image1],
    };
    console.log(data);
    try {
      await api.postForm("/medias", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <MapContainer>
        <LayoutMap center={{ lat: -15.832952, lng: -48.083647 }} />
      </MapContainer>
      <DataContainer>
        <InfoForm onSubmit={handleSubmit}>
          <InfoFormFields>
            <Input
              placeholder="Largura"
              name="largura"
              onChange={handleChange}
            />
            <Input placeholder="Altura" name="altura" onChange={handleChange} />
            <Input
              placeholder="Latitude"
              name="latitude"
              onChange={handleChange}
            />
            <Input
              placeholder="Longitude"
              name="longitude"
              onChange={handleChange}
            />
            <Input placeholder="Manutenção" name="" onChange={handleChange} />

            <Select name="type" onChange={handleSelect}>
              <option value="select">Selecione o tipo</option>
              <option value="outdoor">Outdoor</option>
              <option value="frontlight">Front-Light</option>
              <option value="triedo">Triedro</option>
            </Select>
            <Input
              placeholder="Descrição"
              name="description"
              onChange={handleChange}
            />

            <Select name="is_available" onChange={handleSelect}>
              <option value="select">Selecione a disponibilidade</option>
              <option value="true">Disponível</option>
              <option value="false">Indisponível</option>
            </Select>

            <Select name="region" onChange={handleSelect}>
              <option value="select">Selecione a região</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </Select>
            {/* {previewImage && (
              <Image
                src={previewImage}
                alt="Selected Image"
                width={200}
                height={200}
              />
            )} */}
            <ImageUploadInput 
            // previewImage={previewImage}
            >
              <ImageUploadInputInput
                onChange={handleChange}
                name="image1"
                type="file"
                accept="image/*"
              />
            </ImageUploadInput>
          </InfoFormFields>

          <CreateButton>Registrar Mídia</CreateButton>
        </InfoForm>
      </DataContainer>
    </Container>
  );
}
