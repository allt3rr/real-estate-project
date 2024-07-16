import Image from "next/image";
import Arrow from "/public/assets/homepage/Arrow.svg";
import Balcony from "/public/assets/homepage/balcons.webp";
import Circle from "./circle/Circle";
import Text from "./Text/Text";

const FirstSection = () => {
  return (
    <div className="flex items-center relative xl:mt-20">
      <Circle>
        <div className="flex items-center mt-2 md:mt-20">
          <Image src={Arrow} alt="Niebieska strzałka" className="w-2/12" />
          <h1 className="font-jost text-xl sm:text-3xl lg:text-4xl ms-2">
            O NAS
          </h1>
        </div>
        <Text />
      </Circle>
      <Image
        src={Balcony}
        alt="Zdjęcie pokazowe budowy"
        className="mt-10 z-10"
      />
    </div>
  );
};

export default FirstSection;
