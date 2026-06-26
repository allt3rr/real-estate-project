import Image from "next/image";
import HomePhoto from "/public/assets/homepage/home_photo.webp";

interface SubpageHeroProps {
  title: string;
}

const SubpageHero = ({ title }: SubpageHeroProps) => {
  return (
    <div className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] xl:h-[60vh] overflow-hidden">
      <Image
        src={HomePhoto}
        alt="Zdjęcie nieruchomości w tle"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="absolute inset-0 flex justify-center items-center flex-col z-20 px-4">
        <h1 className="font-jost text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white text-center tracking-wider uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          {title}
        </h1>
        <div className="w-16 h-1 bg-[#008EF4] rounded-full mt-4" />
      </div>
    </div>
  );
};

export default SubpageHero;
