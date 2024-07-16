import Image from "next/image";
import home_photo from "/public/assets/homepage/home_photo.webp";
import HomeText from "@/components/homepage/HomeText";
import FirstSection from "@/components/homepage/FirstSection/FirstSection";
import SecondSection from "@/components/homepage/SecondSection/SecondSection";
import Gallery from "@/components/homepage/Gallery/Gallery";
import Map from "@/components/homepage/Map/Map";
import ContactSection from "@/components/homepage/Contact/Contact";

export default function Home() {
  return (
    <>
      <Image
        src={home_photo}
        alt="Zdjęcie domu w tle strona główna"
        width={1920}
        height={1080}
        className="w-screen h-5/6 xl:h-screen z-40 relative"
      />
      <HomeText />
      <FirstSection />
      <SecondSection />
      <Gallery />
      <Map />
      <ContactSection />
    </>
  );
}
