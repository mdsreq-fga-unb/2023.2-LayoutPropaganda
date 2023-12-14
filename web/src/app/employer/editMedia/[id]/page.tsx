"use client";

import { api } from "@/services/api";
import { regions } from "@/utils/regions";
import { useEffect, useState } from "react";
import {
  CreateButton,
  DataContainer,
  ImageUploadInput,
  ImageUploadInputInput,
  InfoForm,
  InfoFormFields,
  Input,
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
  high: number;
  width: number;
  maintenance: string;
  is_deleted: boolean;
  is_available: boolean;
  updated_at: Date;
  created_at: Date;
  MediaImages: IMediaImage[];
}

export default function UpdateMedia({params}: {params: {id: string}}) {
  const [description, setDescription] = useState("");
  const [region, setRegion] = useState("");
  const [maintenance, setMaintenance] = useState("");  
  const [type, setType] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [is_available, setIsAvailable] = useState("");
  const [largura, setLargura] = useState(0);
  const [altura, setAltura] = useState(0);
  const [image1, setImage1] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await api.get(`/medias/${params.id}`);
        const mediaData: IMedia = response.data; 

        setDescription(mediaData.description);
        setRegion(mediaData.region);
        setType(mediaData.type);
        setLatitude(mediaData.latitude);
        setLongitude(mediaData.longitude);
        setMaintenance(mediaData.maintenance);
        setIsAvailable(mediaData.is_available.toString()); 
        setLargura(mediaData.height);
        setAltura(mediaData.width);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [params.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

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
      const file = e.target?.files?.[0] ?? null;
      setImage1(file);
      setPreviewImage(file ? URL.createObjectURL(file) : null);
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
    "description": description,
    "altura": String(altura),
    "largura": String(largura),
    "region": region,
    "type": type,
    "latitude": String(latitude),
    "longitude": String(longitude),
    "maintenance": maintenance,
    "is_available": is_available === "true"}

    try {
      await api.put(`/medias/${params.id}`, data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <DataContainer>
        <InfoForm onSubmit={handleSubmit}>
          <InfoFormFields>
            <Input
              placeholder="Largura"
              name="largura"
              onChange={handleChange}
              type="number"
              step="0.0000000000000001"
              value={largura}
            />
            <Input 
              placeholder="Altura"
              name="altura"
              onChange={handleChange}
              type="number"
              step="0.0000000000000001"
              value={altura}
            />
            <Input
              placeholder="Latitude"
              name="latitude"
              onChange={handleChange}
              type="number"
              step="0.0000000000000001"
              value={latitude}
            />
            <Input
              placeholder="Longitude"
              name="longitude"
              onChange={handleChange}
              type="number"
              step="0.0000000000000001"
              value={longitude}
            />
            <Input placeholder="Manutenção" name="" onChange={handleChange} value={maintenance}/>

            <Select name="type" onChange={handleSelect} value={type}>
              <option value="select">Selecione o tipo</option>
              <option value="outdoor">Outdoor</option>
              <option value="frontlight">Front-Light</option>
              <option value="triedo">Triedro</option>
            </Select>
            <Input
              placeholder="Descrição"
              name="description"
              onChange={handleChange}
              value={description}
            />

            <Select name="is_available" onChange={handleSelect} value={is_available}>
              <option value="select">Selecione a disponibilidade</option>
              <option value="true">Disponível</option>
              <option value="false">Indisponível</option>
            </Select>

            <Select name="region" onChange={handleSelect} value={region}>
              <option value="select">Selecione a região</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </Select>
            <ImageUploadInput 
              previewImage={previewImage}
            >
              <ImageUploadInputInput
                onChange={handleChange}
                name="image1"
                type="file"
                multiple
                accept="image/*"
              />
            </ImageUploadInput>
          </InfoFormFields>

          <CreateButton>Atualizar Mídia</CreateButton>
        </InfoForm>
      </DataContainer>
  );
}
