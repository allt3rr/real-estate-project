import React from "react";
import Image from "next/image";
import Realizations from "/public/assets/realizations/NASZE REALIZACJE.svg";
import RealizationsMobile from "/public/assets/realizations/NASZE REALIZACJE (1).svg";

const RealizationsText = () => {
  return (
    <div className="w-screen aspect-video xl:h-[80vh] flex justify-center items-center flex-col absolute top-0 left-0">
      <Image
        src={RealizationsMobile}
        alt="Realizacje"
        className="translate-y-10 px-10 z-40 md:hidden"
      />
      <Image
        src={Realizations}
        alt="Realizacje"
        className="translate-y-10 px-10 z-40 hidden md:block"
      />
    </div>
  );
};

export default RealizationsText;
