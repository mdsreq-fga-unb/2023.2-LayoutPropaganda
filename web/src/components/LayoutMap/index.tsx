"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

export default function LayoutMap() {
  const centerOfMap = { lat: -15.832952, lng: -48.083647 };

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY || "",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    
    const bounds = new window.google.maps.LatLngBounds(centerOfMap);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const MarkerComponent = () => {
    const position = { lat: -15.832952, lng: -48.083647 };

    return <Marker position={position} />;
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={centerOfMap}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <MarkerComponent />
      </GoogleMap>
    </>
  );
}
