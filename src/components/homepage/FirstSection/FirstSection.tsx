import Image from "next/image";
import Balcony from "/public/assets/homepage/balcons.webp";
import Text from "./Text/Text";

const FirstSection = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24 xl:py-32 relative grid grid-cols-1 md:grid-cols-12 gap-12 xl:gap-20 items-center overflow-visible">
      <div className="w-full md:col-span-6 flex flex-col items-start z-10">
        <span className="text-sm font-bold text-[#008EF4] tracking-widest mb-3 uppercase block">
          Kim jesteśmy
        </span>
        <h2 className="font-jost text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003861] uppercase tracking-wider mb-4">
          O NAS
        </h2>
        <div className="w-20 h-1.5 bg-[#008EF4] rounded-full mb-8" />
        <Text />
        
        <div className="grid grid-cols-2 gap-6 sm:gap-8 mt-10 w-full border-t border-gray-100 pt-8">
          <div>
            <p className="font-jost font-black text-3xl sm:text-4xl text-[#003861]">10+ lat</p>
            <p className="text-xs sm:text-sm text-gray-500 font-semibold mt-1 uppercase tracking-wider">doświadczenia na rynku</p>
          </div>
          <div>
            <p className="font-jost font-black text-3xl sm:text-4xl text-[#008EF4]">100%</p>
            <p className="text-xs sm:text-sm text-gray-500 font-semibold mt-1 uppercase tracking-wider">bezpieczeństwa transakcji</p>
          </div>
        </div>
      </div>

      <div className="w-full md:col-span-6 flex justify-center md:justify-end z-10">
        <div className="relative w-full max-w-lg lg:max-w-xl group">
          <div className="absolute -inset-4 bg-[#F4F4F4] rounded-3xl -z-10 border border-gray-200/50 shadow-inner transform translate-x-4 translate-y-4" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white">
            <Image
              src={Balcony}
              alt="Zdjęcie nieruchomości - balkony"
              placeholder="blur"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
