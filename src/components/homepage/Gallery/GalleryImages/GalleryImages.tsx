"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Slides } from "@/utils/Constants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GalleryImages() {
  const swiperSlides = Slides;

  return (
    <div className="swiper-container relative w-full px-4 sm:px-12">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Navigation, Pagination, A11y]}
        lazyPreloadPrevNext={2}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="w-full py-12"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {swiperSlides.map((item) => (
          <SwiperSlide 
            key={item.id} 
            className="relative group overflow-hidden rounded-3xl aspect-[4/5] bg-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
            
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
              <span className="text-xs uppercase bg-[#008EF4] text-white px-3 py-1 rounded-full font-bold tracking-wider w-max mb-2 shadow-sm">
                {item.type}
              </span>
              <h3 className="font-jost font-extrabold text-lg sm:text-xl leading-snug tracking-wide group-hover:text-blue-200 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-xs text-gray-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                Zobacz szczegóły →
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev !w-10 !h-10 !bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-100 after:!text-sm after:!font-bold transition-all hover:!bg-[#008EF4] hover:!text-white hover:scale-105"></div>
      <div className="swiper-button-next !w-10 !h-10 !bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-100 after:!text-sm after:!font-bold transition-all hover:!bg-[#008EF4] hover:!text-white hover:scale-105"></div>
    </div>
  );
}
