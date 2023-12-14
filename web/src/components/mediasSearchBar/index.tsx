import { IMedia } from "@/types/media";
import { SearchBarContainer, SearchBarInput } from "./styles";

interface IMediasSearchBarProps {
  medias: IMedia[];
  setMediasFiltered: React.Dispatch<React.SetStateAction<IMedia[]>>;
  setHasSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MediasSearchBar({
  medias,
  setMediasFiltered,
  setHasSearch,
}: IMediasSearchBarProps) {
  const searchMedias = async (search: string) => {
    if (search === "") {
      setHasSearch(false);
      setMediasFiltered([]);
      return;
    } else {
      setHasSearch(true);
    }

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
