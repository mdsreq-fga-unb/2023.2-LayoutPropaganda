'use client'

import React from 'react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

export default function Map() {
  const center = { lat: 37.7833, lng: -122.4167 };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
  });


  const MarkerComponent = () => {
    const position = { lat: 37.7833, lng: -122.4167 };

    return (
      <Marker
        position={position}
      />
    );
  };

  


  if (!isLoaded) return <div>Loading...</div>;
  
  return (
    <GoogleMap
      center={center}
      zoom={13}
    >
      <MarkerComponent />

    </GoogleMap>
  );
}