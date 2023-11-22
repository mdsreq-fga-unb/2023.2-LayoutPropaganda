"use client";

import LayoutMap from "@/components/LayoutMap";
import {
  Container,
  DivisoryBar,
  FilterGroup,
  Filters,
  MapContainer,
  MapFilter,
  MapFilters,
  Media,
  MediaList,
  MediaListContainer,
  MediaInfo,
  MediaInfoTexts,
  MediaInfoMap,
  MediaImage,
  RemoveFilterButton,
  MediaInfoTags,
  MediaInfoAddress,
  FilterGroupTitle,
  FilterGroupChevronExpand,
  FilterItem,
  FilterDivisoryBar,
  FilterItems,
} from "./styles";
import {
  ChevronDown,
  ChevronRight,
  MapPin,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { setKey, fromLatLng } from "react-geocode";
import { motion } from "framer-motion";

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

interface MediaAddresses {
  [mediaId: string]: string;
}

interface IListFilters {
  [filterName: string]: {
    [filterOption: string]: boolean;
  };
}

export default function Medias() {
  const [mapFilters, setMapFilters] = useState(["exemplo"]);

  const googleMapsApiKey = process.env.NEXT_PUBLIC_MAP_API_KEY || "";

  const getMedias = async (): Promise<IMedia[]> => {
    const response = await fetch("http://localhost:3333/medias");
    const data = await response.json();
    return data;
  };

  const [data, setData] = useState<IMedia[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMedias();
        setData(response);
      } catch (error) {
        setError(error as string);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const fakeMedias: IMedia[] = [
    {
      id_media: "1",
      type: "Painel",
      region: "Brasília",
      description: "Casa do caralho",
      latitude: -15.832952,
      longitude: -48.083647,
      is_deleted: false,
      is_available: true,
      updated_at: new Date(),
      created_at: new Date(),
      MediaImages: [],
    },
    {
      id_media: "2",
      type: "Painel",
      region: "Brasília",
      description: "Puta que pariu",
      latitude: -15.832952,
      longitude: -48.083647,
      is_deleted: false,
      is_available: true,
      updated_at: new Date(),
      created_at: new Date(),
      MediaImages: [],
    },
    {
      id_media: "3",
      type: "Painel",
      region: "Brasília",
      description: "No meio do seu cu",
      latitude: -15.832952,
      longitude: -48.083647,
      is_deleted: false,
      is_available: true,
      updated_at: new Date(),
      created_at: new Date(),
      MediaImages: [],
    },
    {
      id_media: "4",
      type: "Painel",
      region: "Brasília",
      description: "Onde a mãe chora e o filho não vê",
      latitude: -15.832952,
      longitude: -48.083647,
      is_deleted: false,
      is_available: true,
      updated_at: new Date(),
      created_at: new Date(),
      MediaImages: [],
    },
    {
      id_media: "11",
      type: "Painel",
      region: "Brasília",
      description: "Casa do caralho",
      latitude: -15.832952,
      longitude: -48.083647,
      is_deleted: false,
      is_available: true,
      updated_at: new Date(),
      created_at: new Date(),
      MediaImages: [],
    },
    {
      id_media: "22",
      type: "Painel",
      region: "Brasília",
      description: "Puta que pariu",
      latitude: -15.832952,
      longitude: -48.083647,
      is_deleted: false,
      is_available: true,
      updated_at: new Date(),
      created_at: new Date(),
      MediaImages: [],
    },
    {
      id_media: "33",
      type: "Painel",
      region: "Brasília",
      description: "No meio do seu cu",
      latitude: -15.832952,
      longitude: -48.083647,
      is_deleted: false,
      is_available: false,
      updated_at: new Date(),
      created_at: new Date(),
      MediaImages: [],
    },
    {
      id_media: "44",
      type: "Painel",
      region: "Brasília",
      description: "Onde a mãe chora e o filho não vê",
      latitude: -15.832952,
      longitude: -48.083647,
      is_deleted: false,
      is_available: true,
      updated_at: new Date(),
      created_at: new Date(),
      MediaImages: [],
    },
  ];

  const medias = data || [];

  // melhorar o nome e por em outro arquivo
  const RenderMedias = () => {
    setKey(googleMapsApiKey);
    const [addresses, setAddresses] = useState<MediaAddresses>({});

    useEffect(() => {
      medias.forEach((media) => {
        fromLatLng(media.latitude, media.longitude).then(
          ({ results }) => {
            const address = results[0].formatted_address;
            setAddresses((prevAddresses) => ({
              ...prevAddresses,
              [media.id_media]: address,
            }));
          },
          (error) => {
            console.error(error);
          }
        );
      });
    }, []);

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>Error</p>;

    return (
      <>
        {medias.map((media) => {
          return (
            <Media key={media.id_media}>
              <MediaImage>
                <p>Imagem</p>
              </MediaImage>
              <MediaInfo>
                <MediaInfoMap>
                  <LayoutMap
                    center={{ lat: media.latitude, lng: media.longitude }}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </MediaInfoMap>
                <MediaInfoTexts>
                  <h3>{media.description}</h3>

                  <MediaInfoAddress>
                    <MapPin />
                    {addresses[media.id_media] ? (
                      <>
                        <p>{addresses[media.id_media]}</p>
                      </>
                    ) : (
                      <p>Carregando endereço...</p>
                    )}
                  </MediaInfoAddress>
                  <MediaInfoTags>
                    <p>{media.type}</p>
                    <p>{media.region}</p>

                    <p>{media.is_available ? "disponivel" : "indisponivel"}</p>
                  </MediaInfoTags>
                </MediaInfoTexts>
              </MediaInfo>
            </Media>
          );
        })}
      </>
    );
  };

  // melhorar o nome e por em outro arquivo
  const RenderMapFilters = () => {
    const handleRemoveFilter = (filter: string) => {
      setMapFilters(mapFilters.filter((mapFilter) => mapFilter !== filter));
    };

    return (
      <>
        {mapFilters.map((filter) => {
          return (
            <MapFilter key={filter}>
              <RemoveFilterButton onClick={() => handleRemoveFilter(filter)}>
                <X size={16} />
              </RemoveFilterButton>
              <p>{filter}</p>
            </MapFilter>
          );
        })}
      </>
    );
  };

  const filters: IListFilters = {
    tipo: {
      painel: true,
      outdoor: true,
      frontlight: true,
      backlight: true,
    },
    região: {
      brasilia: true,
      goiania: true,
      saopaulo: true,
      riodejaneiro: true,
    },
    Disponibilidade: {
      available: true,
      unavailable: true,
    },
  };

  const RenderListFilters = () => {
    const [listFilters, setListFilters] = useState<IListFilters>(filters);
    const [expandedGroups, setExpandedGroups] = useState<{
      [key: string]: boolean;
    }>({});

    const handleFilterClick = (filterName: string, filterOption: string) => {
      setListFilters((prevFilters) => ({
        ...prevFilters,
        [filterName]: {
          ...prevFilters[filterName],
          [filterOption]: !prevFilters[filterName][filterOption],
        },
      }));
    };

    const handleGroupToggle = (filterName: string) => {
      setExpandedGroups((prevExpanded) => ({
        ...prevExpanded,
        [filterName]: !prevExpanded[filterName],
      }));
    };

    return (
      <>
        {Object.entries(listFilters).map(([filterName, filterOptions]) => {
          const isGroupExpanded = expandedGroups[filterName];

          const groupVariants = {
            collapsed: { height: 0, overflow: "hidden" },
            expanded: { height: "auto" },
          };

          return (
            <FilterGroup key={filterName}>
              <FilterGroupTitle onClick={() => handleGroupToggle(filterName)}>
                <h3>{filterName}</h3>
                {isGroupExpanded ? <ChevronDown /> : <ChevronRight />}
              </FilterGroupTitle>
              <FilterItems
                as={motion.div}
                key={filterName}
                variants={groupVariants}
                initial="collapsed"
                animate={isGroupExpanded ? "expanded" : "collapsed"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isGroupExpanded &&
                  Object.entries(filterOptions).map(
                    ([filterOption, filterOptionValue]) => (
                      <FilterItem key={filterOption}>
                        <input
                          type="checkbox"
                          checked={filterOptionValue}
                          onChange={() =>
                            handleFilterClick(filterName, filterOption)
                          }
                        />
                        <p
                          onClick={() =>
                            handleFilterClick(filterName, filterOption)
                          }
                        >
                          {filterOption}
                        </p>
                      </FilterItem>
                    )
                  )}
              </FilterItems>
              <FilterDivisoryBar />
            </FilterGroup>
          );
        })}
      </>
    );
  };

  return (
    <Container>
      <MapContainer>
        <MapFilters>
          <SlidersHorizontal />
          <RenderMapFilters />
        </MapFilters>
        <LayoutMap center={{ lat: -15.832952, lng: -48.083647 }} />
      </MapContainer>

      <DivisoryBar />

      <MediaListContainer>
        <Filters>
          <RenderListFilters />
        </Filters>

        <MediaList>
          <RenderMedias />
        </MediaList>
      </MediaListContainer>
    </Container>
  );
}
