import React from "react";
import Image from "next/image";
import Flats from "/public/assets/adverts/flats/MIESZKANIA (1).svg";
import FlatsMobile from "/public/assets/adverts/flats/MIESZKANIA.svg";

const FlatsHomeText = () => {
  return (
    <div className="w-screen aspect-video xl:h-[80vh] flex justify-center items-center flex-col absolute top-0 left-0">
      <Image
        src={FlatsMobile}
        alt="Mieszkania"
        className="translate-y-10 px-10 z-40 md:hidden"
      />
      <Image
        src={Flats}
        alt="Mieszkania"
        className="translate-y-10 px-10 z-40 hidden md:block"
      />
    </div>
  );
};

export default FlatsHomeText;
