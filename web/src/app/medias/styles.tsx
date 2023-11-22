import exp from "constants";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MapContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const MapFilters = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 8px;
`;

export const MapFilter = styled.div`
  display: flex;
  background-color: #2b2b2b;
  font-size: 16px;
  color: #fff;
  padding: 4px 8px;
  border-radius: 16px;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  gap: 4px;
`;

export const RemoveFilterButton = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  align-items: center;
  cursor: pointer;
`;

export const MediaListContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
`;

export const Filters = styled.div`
  width: 20%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FilterDivisoryBar = styled.div`
  width: 60%;
  border-bottom: 1px solid #ffffff66;
  margin: 1rem 0;
`;

export const FilterGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`;

export const FilterGroupTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const FilterGroupChevronExpand = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  align-items: center;
  cursor: pointer;
`;

export const FilterItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`;

export const FilterItem = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  select {
    width: 100%;
    height: 50%;
    margin-bottom: 4px;
  }
`;

export const MediaList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const Media = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
`;

export const MediaImage = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: red;
  border: 1px solid #fff;
  border-radius: 8px;
`;

export const MediaInfo = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
`;

export const MediaInfoMap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MediaInfoTexts = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px;
  gap: 8px;
`;

export const MediaInfoAddress = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const MediaInfoTags = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;

  p {
    font-size: 12px;
    color: #fff;
    background-color: #424242;
    padding: 4px;
    border-radius: 8px;
  }
`;

export const DivisoryBar = styled.div`
  width: 90%;
  border-bottom: 2px solid #ffffff;
  margin: 1rem 0;
`;
