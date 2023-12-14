"use client";

import {
  Container,
  DivisoryBar,
  FilterDivisoryBar,
  FilterGroup,
  FilterGroupTitle,
  FilterItem,
  FilterItems,
  Filters,
  MapContainer,
  MapFilter,
  MapFilters,
  Media,
  MediaInfo,
  MediaInfoAddress,
  MediaInfoMap,
  MediaInfoTags,
  MediaInfoTexts,
  MediaList,
  MediaListContainer,
  RemoveFilterButton,
} from "@/app/medias/styles";
import LayoutMap from "@/components/LayoutMap";
import MediaEmployerButtons from "@/components/mediaEmployerButtons";
import { api } from "@/services/api";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  MapPin,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { fromLatLng, setKey } from "react-geocode";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ButtonContainer,
  CreateMediaButton,
  MediaEditorMenu,
  MediaImage,
  SearchBarContainer,
} from "./styles";
import { useRouter } from "next/navigation";
import MediasSearchBar from "@/components/mediasSearchBar";
import { IMedia } from "@/types/media";

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

  const router = useRouter();

  const getMedias = async (): Promise<IMedia[]> => {
    const response = await api.get("/medias");
    return response.data;
  };

  const [data, setData] = useState<IMedia[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [hasSearch, setHasSearch] = useState(false);
  const [searchResult, setSearchResult] = useState<IMedia[]>([]);

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
  // melhorar o nome e por em outro arquivo
  setKey(googleMapsApiKey);
  const [addresses, setAddresses] = useState<MediaAddresses>({});

  useEffect(() => {
    data.forEach((media) => {
      console.log("entrou no foreach");
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
  }, [data]);

  const RenderMedias = () => {
    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>Error</p>;
    const info = hasSearch ? searchResult : data;

    console.log(searchResult);

    if (info.length === 0) return <p>Nenhuma mídia encontrada</p>;

    return (
      <>
        {info.map((media) => {
          return (
            <Media key={media.id_media}>
              <MediaEditorMenu>
                <MediaImage>
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={true}
                    pagination={{ clickable: true }}
                    className="image-swiper"
                    slidesPerView={1}
                    loop={true}
                  >
                    {media.MediaImages.map((image) => {
                      return (
                        <SwiperSlide key={image.id_media_image}>
                          <img
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/files/${image.url}`}
                            alt="Media Image"
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </MediaImage>
                <MediaEmployerButtons id={media.id_media} setMedias={setData} />
              </MediaEditorMenu>
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

      <ButtonContainer>
        <SearchBarContainer>
          <MediasSearchBar
            medias={data}
            setMediasFiltered={setSearchResult}
            setHasSearch={setHasSearch}
          />
        </SearchBarContainer>

        <CreateMediaButton
          onClick={() => router.push("/employer/createMedia/")}
        >
          + Nova mídia
        </CreateMediaButton>
      </ButtonContainer>
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
