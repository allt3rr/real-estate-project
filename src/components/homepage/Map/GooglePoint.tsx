"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GooglePoint = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "70px",
  };

  const center = {
    lat: 52.2297,
    lng: 21.0122,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDmgUGgTgw-ilkSiXlcz-GieNLSFdlloEQ">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GooglePoint;
