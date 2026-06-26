import React from "react";
import Image from "next/image";
import ContactBg from "/public/assets/homepage/contact_background.webp";
import ContactBgMobile from "/public/assets/homepage/contact_background_mobile.webp";

const ImagesBackgroundContactSection = () => {
  return (
    <>
      <div className="block md:hidden absolute inset-0 z-0">
        <Image
          src={ContactBgMobile}
          alt="Contact Background Fancy Building Mobile"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src={ContactBg}
          alt="Contact Background Fancy Building Desktop"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </>
  );
};

export default ImagesBackgroundContactSection;
