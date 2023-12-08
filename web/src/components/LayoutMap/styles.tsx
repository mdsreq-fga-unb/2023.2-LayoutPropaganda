import { devices } from "@/utils/devices";
import { GoogleMap } from "@react-google-maps/api";
import styled from "styled-components";

export const MapContainer = styled(GoogleMap)`
  height: 658px;
  width: 365px;

  @media ${devices.mobileS} {
    height: 400px;
    width: 200px;
  }
  @media ${devices.mobileM} {
    height: 500px;
    width: 250px;
  }
  @media ${devices.mobileL} {
    height: 600px;
    width: 300px;
  }
  @media ${devices.tablet} {
    height: 658px;
    width: 365px;
  }
`;
