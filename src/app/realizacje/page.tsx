import React from "react";
import Image from "next/image";
import HomePhoto from "/public/assets/homepage/home_photo.webp";
import RealizationsText from "@/components/realizations/RealizationsText";
import HomeText from "@/components/realizations/HomeText";
import RealizationsItems from "@/components/realizations/RealizationsItems";

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
      <RealizationsText />
      <HomeText />
      <RealizationsItems />
    </>
  );
};

export default page;
