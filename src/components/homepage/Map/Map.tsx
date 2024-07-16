import Image from "next/image";
import MapArrow from "/public/assets/homepage/Arrow 2.png";
import GooglePoint from "./GooglePoint";

const Map = () => {
  return (
    <div className="w-screen h-[100vh] mt-32 md:mt-64 relative overflow-x-hidden md:overflow-visible z-30">
      <div className="flex items-center w-screen justify-end translate-x-56 sm:translate-x-64 md:translate-x-0">
        <h1 className="font-jost text-md sm:text-2xl md:text-4xl me-4 uppercase whitespace-nowrap">
          Znajdź nas tutaj
        </h1>
        <Image
          src={MapArrow}
          width={400}
          height={20}
          alt="Strzalka mapa, lokalizacja"
          className="rotate-180"
        />
      </div>
      <div className="relative mt-12">
        <div className="bg-[#F9F9F9] w-5/6 sm:w-1/2 xl:w-1/3 sm:aspect-square p-6 xl:p-10 rounded-3xl sm:rounded-full flex items-center justify-center absolute top-0 right-[12%] sm:right-[45%] xl:right-1/2 boxShadowCustom">
          <h1 className="sm:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in ex
            elementum neque scelerisque interdum. Fusce ultrices consequat dui
            quis laoreet. Nullam dapibus venenatis erat in aliquet. 
          </h1>
        </div>
        <div className="justify-end w-screen flex">
          <div className="bg-white w-4/5 sm:w-1/2 xl:w-1/3 aspect-square p-1 sm:p-3 rounded-[70px] sm:rounded-[90px] flex items-center justify-center -translate-x-[12%] sm:-translate-x-[10%] md:-translate-x-1/4 xl:-translate-x-3/4 translate-y-[13rem] md:translate-y-[18rem] lg:translate-y-[22rem] xl:translate-y-40 boxShadowCustom">
            <GooglePoint />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
