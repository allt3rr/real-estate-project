import React from "react";
import Image from "next/image";
import HomePhoto from "/public/assets/homepage/home_photo.webp";
import FlatsHomeText from "@/components/flats/FlatsHomeText";
import FilterFlats from "@/components/flats/Filter/FilterFlats";

const page = () => {
  return (
    <>
      <Image
        src={HomePhoto}
        alt="Zdjęcie domu w tle strona główna"
        width={1920}
        height={1080}
        className="w-screen h-5/6 xl:h-[80vh] z-40 relative"
      />
      <FlatsHomeText />
      <FilterFlats />
    </>
  );
};

export default page;
