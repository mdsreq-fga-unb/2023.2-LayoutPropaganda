"use client";

import React from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import { MapContainer } from "./styles";

export default function Map() {
  const center = { lat: 37.7833, lng: -122.4167 };

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.MAP_API_KEY || "",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const MarkerComponent = () => {
    const position = { lat: 37.7833, lng: -122.4167 };

    return <Marker position={position} />;
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <MarkerComponent />
      </GoogleMap>
    </>
  );
}
