"use client";

import React from "react";
import Image from "next/image";
import Flats from "/public/assets/adverts/flats/MIESZKANIA (1).svg";
import FlatsMobile from "/public/assets/adverts/flats/MIESZKANIA.svg";
import { useMediaQuery } from "@/hooks/isMobile";

const FlatsHomeText = () => {
  const isMobile = useMediaQuery();

  return (
    <div className="w-screen aspect-video xl:h-[80vh] flex justify-center items-center flex-col absolute top-0 left-0">
      {isMobile ? (
        <Image
          src={FlatsMobile}
          alt="Mieszkania"
          className="translate-y-10 px-10 z-40"
        />
      ) : (
        <Image
          src={Flats}
          alt="Mieszkania"
          className="translate-y-10 px-10 z-40"
        />
      )}
    </div>
  );
};

export default FlatsHomeText;
