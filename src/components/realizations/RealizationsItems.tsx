"use client";

import React from "react";
import Image from "next/image";
import { Realizations } from "@/utils/Constants";

const RealizationsItems = () => {
  return (
    <div className="container mx-auto px-6 py-20 md:py-28 space-y-24 md:space-y-36">
      {Realizations.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={item.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            {/* Image Column */}
            <div
              className={`w-full lg:col-span-7 ${
                isEven ? "" : "lg:order-last"
              }`}
            >
              <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-white group">
                <Image
                  src={item.ImageUrl}
                  alt={item.title}
                  fill
                  placeholder="blur"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                
                {/* Location Badge on Image */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-lg border border-white/20 z-20 flex items-center gap-2 text-sm font-bold text-[#003861] uppercase tracking-wider">
                  <span className="text-[#008EF4] text-base">📍</span>
                  {item.Location}
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:col-span-5 flex flex-col items-start">
              <span className="text-xs font-bold text-[#008EF4] tracking-widest uppercase mb-2">
                Inwestycja Zakończona
              </span>
              <h2 className="font-jost text-3xl sm:text-4xl font-extrabold text-[#003861] uppercase tracking-wide leading-tight mb-4">
                {item.title}
              </h2>
              <div className="w-16 h-1 bg-[#008EF4] rounded-full mb-6" />
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-medium mb-8">
                {item.description}
              </p>
              
              {/* Premium metadata details list */}
              <div className="grid grid-cols-2 gap-4 w-full border-t border-b border-gray-100 py-6 mb-6">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Status</p>
                  <p className="font-bold text-sm sm:text-base text-[#003861] mt-0.5">Oddane do użytku</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Standard</p>
                  <p className="font-bold text-sm sm:text-base text-[#008EF4] mt-0.5">Premium Executive</p>
                </div>
              </div>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#003861] hover:text-[#008EF4] transition-colors uppercase tracking-wider group mt-2"
              >
                Zobacz szczegóły
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RealizationsItems;
