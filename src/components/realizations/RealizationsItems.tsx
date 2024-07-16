import React from "react";
import Image from "next/image";
import { Realizations } from "@/utils/Constants";

const RealizationsItems = () => {
  return (
    <>
      {Realizations.map((item) => (
        <div
          className="relative w-screen h-screen flex mt-14 sm:mt-0 sm:items-center flex-col lg:flex-row mb-2 sm:mb-44 lg:mb-10"
          key={item.id}
        >
          <div className="w-full sm:w-4/5 lg:w-4/5 xl:w-2/5 h-1/2 sm:h-3/4 bg-[#F6F6F6] rounded-full flex justify-end items-center -translate-x-1/4 sm:-translate-x-1/2 my-20 boxShadowCustom">
            <p className="w-2/3 sm:w-1/3 sm:-translate-x-20 leading-6 sm:leading-8 text-base sm:text-xl">
              {item.description}
            </p>
          </div>
          <div className="flex flex-col items-center relative me-0 lg:me-10 xl:me-0 mb-16 lg:mb-0">
            <h1 className="font-black text-2xl sm:text-4xl uppercase tracking-wide">
              {item.title}
            </h1>
            <hr className="w-3/4 h-1 bg-[#008EF4] border-none mb-8 mt-4" />
            <Image
              src={item.ImageUrl}
              width={750}
              height={560}
              alt="Zdjęcie produktu"
              className="rounded-xl"
            />
            <div className="bg-[#F6F6F6] absolute lg:left-0 bottom-0 rounded-full px-6 py-8 sm:px-14 sm:py-20 boxShadowCustom lg:-translate-x-1/2 translate-y-2/3 lg:translate-y-1/2">
              <p className="text-2xl">{item.Location}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RealizationsItems;
