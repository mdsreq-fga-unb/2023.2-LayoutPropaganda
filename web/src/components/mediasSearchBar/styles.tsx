import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 8px;
  outline: none;
  font-size: 16px;
  color: #212121;
  font-weight: 500;

  &:focus {
    border: 1px solid #212121;
  }
`;
