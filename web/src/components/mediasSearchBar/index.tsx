import { IMedia } from "@/types/media";
import { SearchBarContainer, SearchBarInput } from "./styles";

interface IMediasSearchBarProps {
  medias: IMedia[];
  setMediasFiltered: React.Dispatch<React.SetStateAction<IMedia[]>>;
}

export default function MediasSearchBar({
  medias,
  setMediasFiltered,
}: IMediasSearchBarProps) {
  const searchMedias = async (search: string) => {
    const results = medias.filter((media) => {
      return (
        media.description.toLowerCase().includes(search.toLocaleLowerCase()) ||
        media.region.toLowerCase().includes(search.toLocaleLowerCase()) ||
        media.type.toLowerCase().includes(search.toLocaleLowerCase())
      );
    });
    setMediasFiltered(results);
  };

  return (
    <SearchBarContainer>
      <SearchBarInput
        type="text"
        placeholder="Pesquisar"
        onChange={(e) => searchMedias(e.target.value)}
      />
    </SearchBarContainer>
  );
}
