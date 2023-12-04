// MediasSearchBar.test.js
import React from "react";
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MediasSearchBar from "../components/mediasSearchBar";
import { IMedia } from "../types/media";

// Mock the IMedia t ype for testing purposes
const setMediasFilteredMock = vi.fn();

beforeEach(() => {
  const medias: IMedia[] = [
    {
      id_media: "4fcc66c2-9688-4465-9b07-bd031c1433bc",
      type: "outdoor",
      region: "Santa Maria",
      description: "Perto da li",
      latitude: 12,
      longitude: 12,
      is_deleted: false,
      is_available: true,
      updated_at: new Date(),
      created_at: new Date(),
      MediaImages: [],
    },
    {
      id_media: "4fcc66c2-9688-4465-9b07-bd031c1433bc",
      type: "outdoor",
      region: "Santa Maria",
      description: "aqui perto",
      latitude: 12,
      longitude: 12,
      is_deleted: false,
      is_available: true,
      updated_at: new Date(),
      created_at: new Date(),
      MediaImages: [],
    },
    {
      id_media: "4fcc66c2-9688-4465-9b07-bd031c1433bc",
      type: "outdoor",
      region: "Guará",
      description: "lá longe",
      latitude: 12,
      longitude: 12,
      is_deleted: false,
      is_available: true,
      updated_at: new Date(),
      created_at: new Date(),
      MediaImages: [],
    },
  ];

  render(
    <MediasSearchBar
      medias={medias}
      setMediasFiltered={setMediasFilteredMock}
    />
  );
});

afterEach(cleanup);

describe("Pesquisa por descrição", () => {
  test("Deve ser possivel pesquisar pela descrição de uma mídia", () => {
    const searchInput = screen.getByPlaceholderText("Pesquisar");

    fireEvent.change(searchInput, { target: { value: "Perto" } });

    expect(setMediasFilteredMock).toHaveBeenCalledWith([
      {
        id_media: "4fcc66c2-9688-4465-9b07-bd031c1433bc",
        type: "outdoor",
        region: "Santa Maria",
        description: "Perto da li",
        latitude: 12,
        longitude: 12,
        is_deleted: false,
        is_available: true,
        updated_at: expect.any(Date),
        created_at: expect.any(Date),
        MediaImages: [],
      },
      {
        id_media: "4fcc66c2-9688-4465-9b07-bd031c1433bc",
        type: "outdoor",
        region: "Santa Maria",
        description: "aqui perto",
        latitude: 12,
        longitude: 12,
        is_deleted: false,
        is_available: true,
        updated_at: expect.any(Date),
        created_at: expect.any(Date),
        MediaImages: [],
      },
    ]);
  });
});

describe("Pesquisa por descrição ou região", () => {
  test("Deve ser possivel pesquisar pela descrição de uma mídia", () => {
    const searchInput = screen.getByPlaceholderText("Pesquisar");

    fireEvent.change(searchInput, { target: { value: "guará" } });

    expect(setMediasFilteredMock).toHaveBeenCalledWith([
      {
        id_media: "4fcc66c2-9688-4465-9b07-bd031c1433bc",
        type: "outdoor",
        region: "Guará",
        description: "lá longe",
        latitude: 12,
        longitude: 12,
        is_deleted: false,
        is_available: true,
        updated_at: expect.any(Date),
        created_at: expect.any(Date),
        MediaImages: [],
      },
    ]);
  });
});

describe("Pesquisa por descrição, região ou tipo", () => {
  test("Deve ser possivel pesquisar pela descrição de uma mídia", () => {
    const searchInput = screen.getByPlaceholderText("Pesquisar");

    fireEvent.change(searchInput, { target: { value: "outdoor" } });

    expect(setMediasFilteredMock).toHaveBeenCalledWith([
      {
        id_media: "4fcc66c2-9688-4465-9b07-bd031c1433bc",
        type: "outdoor",
        region: "Santa Maria",
        description: "Perto da li",
        latitude: 12,
        longitude: 12,
        is_deleted: false,
        is_available: true,
        updated_at: expect.any(Date),
        created_at: expect.any(Date),
        MediaImages: [],
      },
      {
        id_media: "4fcc66c2-9688-4465-9b07-bd031c1433bc",
        type: "outdoor",
        region: "Santa Maria",
        description: "aqui perto",
        latitude: 12,
        longitude: 12,
        is_deleted: false,
        is_available: true,
        updated_at: expect.any(Date),
        created_at: expect.any(Date),
        MediaImages: [],
      },
      {
        id_media: "4fcc66c2-9688-4465-9b07-bd031c1433bc",
        type: "outdoor",
        region: "Guará",
        description: "lá longe",
        latitude: 12,
        longitude: 12,
        is_deleted: false,
        is_available: true,
        updated_at: expect.any(Date),
        created_at: expect.any(Date),
        MediaImages: [],
      },
    ]);
  });
});
