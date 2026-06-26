import HomeText from "@/components/homepage/HomeText";
import FirstSection from "@/components/homepage/FirstSection/FirstSection";
import SecondSection from "@/components/homepage/SecondSection/SecondSection";
import Gallery from "@/components/homepage/Gallery/Gallery";
import Map from "@/components/homepage/Map/Map";
import ContactSection from "@/components/homepage/Contact/Contact";
import Alert from "@/utils/Alert";

export default function Home() {
  return (
    <>
      <Alert />
      <HomeText />
      <FirstSection />
      <SecondSection />
      <Gallery />
      <Map />
      <ContactSection />
    </>
  );
}
