"use client";

import React from "react";
import Image from "next/image";
import Realizations from "/public/assets/realizations/NASZE REALIZACJE.svg";
import RealizationsMobile from "/public/assets/realizations/NASZE REALIZACJE (1).svg";
import { useMediaQuery } from "@/hooks/isMobile";

const RealizationsText = () => {
  const isMobile = useMediaQuery();

  return (
    <div className="w-screen aspect-video xl:h-[80vh] flex justify-center items-center flex-col absolute top-0 left-0">
      {isMobile ? (
        <Image
          src={RealizationsMobile}
          alt="Realizacje"
          className="translate-y-10 px-10 z-40"
        />
      ) : (
        <Image
          src={Realizations}
          alt="Realizacje"
          className="translate-y-10 px-10 z-40"
        />
      )}
    </div>
  );
};

export default RealizationsText;
