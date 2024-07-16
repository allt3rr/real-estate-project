import Image from "next/image";
import FirstTitle from "/public/assets/homepage/tekst1.svg";
import SecondTitle from "/public/assets/homepage/tekst2.svg";

const HomeText = () => {
  return (
    <div className="w-screen aspect-video xl:h-screen flex justify-center items-center flex-col absolute top-0 left-0">
      <Image
        src={FirstTitle}
        alt="Tekst pierwszy główny ekran"
        className="translate-y-10 w-3/4 sm:w-1/2 z-40"
      />
      <Image
        src={SecondTitle}
        alt="Tekst drugi główny ekran"
        className="translate-y-10 w-1/2 sm:w-1/3 z-40"
      />
    </div>
  );
};

export default HomeText;
