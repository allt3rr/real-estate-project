"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Slides } from "@/utils/Constants";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default function GalleryImages() {
  const swiperSlides = Slides;

  return (
    <div className="swiper-container relative">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Navigation, Pagination, A11y]}
        lazyPreloadPrevNext={2}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="w-2/3 sm:w-5/6 my-20 aspect-square sm:aspect-[20/9] md:aspect-[35/9] me-14"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {swiperSlides.map((item) => (
          <SwiperSlide key={item.id} className="bg-black">
            {item.content}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev ms-0 sm:ms-[2%]"></div>
      <div className="swiper-button-next me-0 sm:me-[2%]"></div>
    </div>
  );
}
