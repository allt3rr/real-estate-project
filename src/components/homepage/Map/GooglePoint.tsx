"use client";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useInView } from "react-intersection-observer";

const center = {
  lat: 52.2297,
  lng: 21.0122,
};

const GooglePoint = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "AIzaSyDmgUGgTgw-ilkSiXlcz-GieNLSFdlloEQ",
  });

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <div ref={ref} className="w-full h-full min-h-[300px] flex items-center justify-center bg-gray-100">
      {inView && isLoaded ? (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={13}
          options={{
            disableDefaultUI: false,
            zoomControl: true,
          }}
        >
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-400 gap-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#008EF4]"></div>
          <span className="text-sm">Ładowanie mapy...</span>
        </div>
      )}
    </div>
  );
};

export default GooglePoint;
