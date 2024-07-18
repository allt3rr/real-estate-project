"use client";

import React, { useEffect, useState } from "react";
import { GarageData } from "@/utils/GarageConstants";
import flatCircle from "/public/assets/adverts/flats/flat-circle.svg";
import Image from "next/image";
import Timeline from "@/components/flats/FlatSinglePage/Timeline";
import Gallery from "@/components/flats/FlatSinglePage/Gallery";
import { StaticImageData } from "next/image";
import StarIcon from "@mui/icons-material/Star";

type Flat = {
  id: number;
  location: string;
  lot: string;
  description: string;
  ImageUrl: StaticImageData;
};

type FlatProps = {
  params: { id: string };
};

const FlatSinglePage = ({ params }: FlatProps) => {
  const [flatData, setFlatData] = useState<Flat | null | undefined>(null);

  useEffect(() => {
    const flat = GarageData.find((item) => item.id.toString() === params.id);
    setFlatData(flat);
  }, [params.id]);

  if (!flatData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-screen">
      <div className="w-screen h-[50vh] sm:h-[75vh] lg:h-screen">
        <Image
          src={flatData.ImageUrl}
          alt="Home photo"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-start xl:items-center -translate-y-20 sm:-translate-y-0 flex-col xl:flex-row">
        <div className="w-5/6 sm:w-2/3 md:w-1/2 h-[50vh] flex items-center">
          <Image src={flatCircle} alt="circle" className="absolute" />
          <div className="z-10 absolute ms-4 sm:ms-10">
            <h1 className="text-white text-xl sm:text-2xl lg:text-4xl font-bold uppercase w-5/6 mb-2 sm:mb-10">
              Lorem ipsum
            </h1>
            <p className="text-white text-xs sm:text-base lg:text-lg w-5/6 sm:w-1/2 xl:w-1/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              vehicula viverra mi, in luctus est. Suspendisse lectus neque,
              commodo et dignissim eget, efficitur id risus. Proin efficitur
              efficitur ornare. In nec lectus a neque congue finibus. In
              suscipit tellus at mauris placerat mattis. Suspendisse non
              faucibus massa. 
            </p>
          </div>
        </div>
        <ul className="list-disc text-sm sm:text-md md:text-lg flex gap-10 flex-col w-5/6 md:w-4/6 xl:w-1/3 mx-auto mt-12 sm:mt-64 xl:mt-20">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            vehicula viverra mi, in luctus est.{" "}
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            vehicula viverra mi, in luctus est.{" "}
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            vehicula viverra mi, in luctus est.{" "}
          </li>
        </ul>
      </div>
      <div className=" md:mt-28 xl:mt-60">
        <p className="uppercase font-semibold text-3xl text-center mx-2 sm:mx-0">
          Lorem ipsum dolor sit amei
        </p>
        <Timeline />
      </div>
      <div className="flex flex-col justify-center items-center w-screen">
        <p className="uppercase border-b-[#008EF4] border-b-2 font-bold text-4xl w-2/3 text-center mb-20 mt-32 pb-4">
          galeria
        </p>
        <Gallery />
        <span className="border-b-[#008EF4] border-b-2 mt-20 mb-12 w-2/3"></span>
      </div>
      <div className="w-screen flex flex-col items-center justify-center my-14">
        <p className="font-medium text-3xl text-center">
          Zainteresowany? Napisz do nas poniżej!
        </p>
        <form action="#">
          <div className="bg-[#FBFBFB] p-8 sm:p-10 customBoxShadow rounded-full sm:-translate-x-24 translate-y-8 sm:translate-y-10 w-2/3">
            <input
              type="email"
              placeholder="Podaj swój e-mail"
              required
              className="bg-[#E3E3E3] p-2 rounded-md w-full"
            />
            <StarIcon
              color="error"
              style={{ fontSize: "10px" }}
              className="absolute"
            />
          </div>
          <div className="bg-[#FBFBFB] p-10 pb-2 customBoxShadow z-2 rounded-[40%] sm:rounded-full sm:translate-x-18 translate-y-4 sm:translate-y-1 flex items-center justify-center flex-col">
            <textarea
              className="bg-[#E3E3E3] p-2 rounded-md w-5/6"
              name="message"
              id="message"
              rows={8}
              cols={44}
              placeholder="Wiadomość"
            ></textarea>
            <input
              type="submit"
              value={"Wyślij"}
              className="hover:pointer bg-[#008EF4] text-white px-7 py-3 rounded-3xl mt-4"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlatSinglePage;
