import React from "react";
import Image from "next/image";
import Houses from "/public/assets/adverts/houses/DOMY.svg";

const FlatsHomeText = () => {
  return (
    <div className="w-screen aspect-video xl:h-[80vh] flex justify-center items-center flex-col absolute top-0 left-0">
      <Image src={Houses} alt="Domy" className="translate-y-10 px-10 z-40" />
    </div>
  );
};

export default FlatsHomeText;
