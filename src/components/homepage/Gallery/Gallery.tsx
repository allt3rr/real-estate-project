import Image from "next/image";
import GalleryArrow from "/public/assets/homepage/Arrow 2.png";
import GalleryImages from "./GalleryImages/GalleryImages";

const Gallery = () => {
  return (
    <div className="mt-32 md:mt-56">
      <div className="flex -translate-x-44 sm:-translate-x-14 items-center">
        <Image
          src={GalleryArrow}
          alt="Strzalka galerii"
          width={500}
          height={20}
        />
        <h1 className="font-jost text-2xl sm:text-4xl ms-2">GALERIA</h1>
      </div>
      <GalleryImages />
    </div>
  );
};

export default Gallery;
