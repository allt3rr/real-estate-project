import Image from "next/image";
import GooglePoint from "./GooglePoint";

const Map = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <div className="flex items-center gap-6 mb-12 justify-end">
        <h2 className="font-jost text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003861] uppercase tracking-wider whitespace-nowrap">
          Znajdź nas tutaj
        </h2>
        <div className="w-1/4 md:w-1/3 h-0.5 bg-[#008EF4]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch bg-[#F9F9F9] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-md border border-gray-100">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-[#008EF4] rounded-full" />
            <h3 className="font-jost text-xl sm:text-2xl font-bold text-[#003861] uppercase tracking-wide">
              Lokalizacja Inwestycji
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in ex
            elementum neque scelerisque interdum. Fusce ultrices consequat dui
            quis laoreet. Nullam dapibus venenatis erat in aliquet.
          </p>
          <div className="mt-8 flex flex-col gap-4 text-sm sm:text-base text-gray-700 font-semibold border-t border-gray-200 pt-6">
            <div className="flex items-center gap-3">
              <span className="text-[#008EF4] text-lg">📍</span>
              <span>ul. Przykładowa 12, 00-001 Warszawa</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#008EF4] text-lg">📞</span>
              <span className="hover:text-[#008EF4] transition-colors"><a href="tel:+48123456789">+48 123 456 789</a></span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#008EF4] text-lg">✉️</span>
              <span className="hover:text-[#008EF4] transition-colors"><a href="mailto:kontakt@inwestycja.pl">kontakt@inwestycja.pl</a></span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 h-[350px] sm:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg border-8 border-white bg-gray-50">
          <GooglePoint />
        </div>
      </div>
    </div>
  );
};

export default Map;
