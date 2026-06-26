import Image from "next/image";
import { Icons } from "@/utils/Constants";

const Images = () => {
  return (
    <div className="w-full mt-10 lg:mt-16">
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 justify-center">
        {Icons.map((item) => (
          <li 
            key={item.id} 
            className="flex flex-col items-center text-center p-6 bg-[#F9F9F9] rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 relative flex items-center justify-center mb-4 bg-white rounded-2xl p-3 shadow-inner group-hover:scale-105 transition-transform duration-300">
              <Image
                src={item.icon_url}
                alt={item.icon_description}
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="w-8 h-1 bg-[#008EF4] my-3 rounded-full group-hover:w-16 transition-all duration-300" />
            <p className="font-jost font-bold text-sm sm:text-base lg:text-lg text-[#003861] uppercase tracking-wide">
              {item.icon_description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Images;
