import Arrow from "/public/assets/homepage/Arrow.svg";
import Image from "next/image";
import Images from "./Images/Images";

const SecondSection = () => {
  return (
    <div className="relative h-full w-screen mb-14 sm:mb-0 overflow-hidden">
      <h1 className="text-lg xl:text-xl sm:w-7/12 px-10 sm:ps-24 xl:ps-60 pt-52 lg:pt-72 z-10 sticky xl:mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in ex
        elementum neque scelerisque interdum. Fusce ultrices consequat dui quis
        laoreet. Nullam dapibus venenatis erat in aliquet.
      </h1>
      <div className="rounded-full flex items-center w-11/12 sm:w-6/12 aspect-square bg-[#F4F4F4] absolute top-0 right-0 z-0 translate-x-20 -translate-y-28 xl:-translate-y-72">
        <div className="w-full flex justify-end me-20 mt-20">
          <h1 className="font-jost text-base sm:text-xl md:text-2xl lg:text-4xl me-2">
            Z NAMI ZYSKUJESZ
          </h1>
          <Image
            src={Arrow}
            alt="Niebieska strzałka"
            className="w-2/12 rotate-180"
          />
        </div>
      </div>
      <Images />
    </div>
  );
};

export default SecondSection;
