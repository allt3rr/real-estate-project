import Image from "next/image";
import home_photo from "/public/assets/homepage/home_photo.webp";

const HomeText = () => {
  return (
    <div className="relative w-full h-[65vh] sm:h-[80vh] xl:h-screen overflow-hidden">
      <Image
        src={home_photo}
        alt="Zdjęcie domu w tle strona główna"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/35 z-10" />

      <div className="absolute inset-0 flex justify-center items-center flex-col z-20 px-4">
        <h1 className="font-jost text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white text-center tracking-wider uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          LOREM IPSUM
        </h1>
        <h2 className="font-jost text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#008EF4] text-center tracking-widest uppercase mt-4 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          Nieruchomości z pasją
        </h2>
      </div>
    </div>
  );
};

export default HomeText;
