"use client";

import React, { useEffect, useState } from "react";
import { HouseData } from "@/utils/HouseConstants";
import Image from "next/image";
import Timeline from "@/components/flats/FlatSinglePage/Timeline";
import Gallery from "@/components/flats/FlatSinglePage/Gallery";
import { StaticImageData } from "next/image";

type Flat = {
  id: number;
  location: string;
  type: string;
  flatNumber: string;
  roomsAmount: string;
  metrics: number;
  description: string;
  ImageUrl: StaticImageData;
};

type FlatProps = {
  params: { id: string };
};

const FlatSinglePage = ({ params }: FlatProps) => {
  const [flatData, setFlatData] = useState<Flat | null | undefined>(null);

  useEffect(() => {
    const flat = HouseData.find((item) => item.id.toString() === params.id);
    setFlatData(flat);
  }, [params.id]);

  if (!flatData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl font-bold text-[#003861] animate-pulse">Ładowanie...</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50/50 pb-20">
      <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh] overflow-hidden">
        <Image
          src={flatData.ImageUrl}
          alt={flatData.location}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 z-10" />
        
        <div className="absolute inset-0 flex justify-end items-start flex-col z-20 px-6 sm:px-10 lg:px-20 pb-10 sm:pb-16 container mx-auto">
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
            <span className="bg-[#008EF4] text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              Dom
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-white/20">
              {flatData.type}
            </span>
          </div>
          <h1 className="font-jost text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            Dom w miejscowości {flatData.location}
          </h1>
          <div className="w-20 h-1.5 bg-[#008EF4] rounded-full mt-4" />
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start overflow-visible">
        <div className="lg:col-span-8 space-y-12">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100/50">
            <h2 className="font-jost text-2xl font-extrabold text-[#003861] uppercase tracking-wide mb-6">
              Opis nieruchomości
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-medium">
              {flatData.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              vehicula viverra mi, in luctus est. Suspendisse lectus neque, commodo et dignissim eget,
              efficitur id risus. Proin efficitur efficitur ornare. In nec lectus a neque congue finibus.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100/50">
            <h2 className="font-jost text-2xl font-extrabold text-[#003861] uppercase tracking-wide mb-6">
              Dane techniczne
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider">Lokalizacja</span>
                <span className="font-bold text-base sm:text-lg text-[#003861] mt-1">{flatData.location}</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider">Powierzchnia</span>
                <span className="font-bold text-base sm:text-lg text-[#003861] mt-1">{flatData.metrics} m²</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider">Liczba pokoi</span>
                <span className="font-bold text-base sm:text-lg text-[#003861] mt-1">{flatData.roomsAmount}</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider">Kondygnacje</span>
                <span className="font-bold text-base sm:text-lg text-[#003861] mt-1">{flatData.flatNumber}</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider">Typ oferty</span>
                <span className="font-bold text-base sm:text-lg text-[#008EF4] mt-1 uppercase tracking-wide">{flatData.type}</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider">Standard</span>
                <span className="font-bold text-base sm:text-lg text-[#003861] mt-1">Premium</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100/50">
            <h2 className="font-jost text-2xl font-extrabold text-[#003861] uppercase tracking-wide mb-6 text-center sm:text-left">
              Etapy realizacji inwestycji
            </h2>
            <div className="overflow-hidden">
              <Timeline />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100/50">
            <h2 className="font-jost text-2xl font-extrabold text-[#003861] uppercase tracking-wide mb-8 text-center">
              Galeria zdjęć
            </h2>
            <Gallery />
          </div>
        </div>

        <div className="lg:col-span-4 lg:sticky lg:top-24 z-20 w-full">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100/80 flex flex-col">
            <h3 className="font-jost text-xl sm:text-2xl font-bold text-[#003861] uppercase tracking-wide mb-2">
              Napisz do nas
            </h3>
            <p className="text-sm text-gray-500 font-medium mb-6">
              Jesteś zainteresowany tą ofertą? Nasz doradca skontaktuje się z Tobą w ciągu kilku minut.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs uppercase tracking-wider font-bold text-gray-400">E-mail</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Twój adres e-mail"
                  className="bg-gray-50 border border-gray-200 focus:border-[#008EF4] rounded-xl p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#008EF4]/15 transition-all text-base font-medium"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs uppercase tracking-wider font-bold text-gray-400">Wiadomość</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Zadaj pytanie odnośnie tej nieruchomości..."
                  className="bg-gray-50 border border-gray-200 focus:border-[#008EF4] rounded-xl p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#008EF4]/15 transition-all resize-none text-base font-medium"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#008EF4] hover:bg-[#003861] text-white font-bold uppercase tracking-wider rounded-xl py-3.5 px-6 transition-colors shadow-md hover:shadow-lg mt-2 cursor-pointer text-center"
              >
                Wyślij zapytanie
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatSinglePage;
