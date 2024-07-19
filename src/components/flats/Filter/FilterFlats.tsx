// pages/index.js
"use client";

import { useState } from "react";
import FilterForm from "./FilterForm";
import { FlatsData } from "@/utils/FlatsConstants";
import Image from "next/image";
import LocationImage from "/public/assets/adverts/utils/location.svg";
import RoomImage from "/public/assets/adverts/utils/room.svg";
import FloorImage from "/public/assets/adverts/utils/floor.svg";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";

interface Filters {
  location: string;
  flat: string;
  minMetrics: string;
  maxMetrics: string;
  rooms: string;
}

const Home = () => {
  const [filteredData, setFilteredData] = useState(FlatsData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleFilter = (filters: Filters) => {
    const { location, flat, minMetrics, maxMetrics, rooms } = filters;
    const minMetricsNumber = parseInt(minMetrics, 10);
    const maxMetricsNumber = parseInt(maxMetrics, 10);
    const filtered = FlatsData.filter((item) => {
      const matchesLocation = location ? item.location === location : true;
      const matchesFlat = flat ? item.flatNumber === flat : true;
      const matchesRoom = rooms ? item.roomsAmount === rooms : true;
      const matchesMinMetricsNumber = !isNaN(minMetricsNumber)
        ? item.metrics >= minMetricsNumber
        : true;
      const matchesMaxMetricsNumber = !isNaN(maxMetricsNumber)
        ? item.metrics <= maxMetricsNumber
        : true;
      return (
        matchesLocation &&
        matchesFlat &&
        matchesMinMetricsNumber &&
        matchesMaxMetricsNumber &&
        matchesRoom
      );
    });
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-screen h-full">
      <div className="w-5/6 md:w-1/2 mx-auto mt-10">
        <div className="flex items-end justify-start">
          <h1 className="font-black text-2xl">Filtry</h1>
          <p className="text-sm">
            Wybierz co Cię interesuje, z poniższych opcji.
          </p>
        </div>
        <FilterForm onFilter={handleFilter} />
      </div>
      <div className="itemWrapper rounded-b-xl flex flex-wrap justify-center gap-10 my-16 w-[90vw] mx-auto">
        {currentData.map((item) => (
          <div
            key={item.id}
            className="item w-72 sm:w-80 boxShadowCustom2 rounded-xl relative hover:scale-105 transition-all overflow-hidden"
          >
            <Link href={`/mieszkania/${item.id}`}>
              <Image
                src={item.ImageUrl}
                alt="Flat Image"
                className="rounded-t-xl"
              />
              <p
                className={`absolute top-0 left-0 py-1 px-4 rounded-tl-xl rounded font-medium tracking-wide text-[#fff] text-md sm:text-xl ${
                  item.type === "Sprzedaż" ? "bg-[#8fce00]" : "bg-[#6fa8dc]"
                }`}
              >
                {item.type}
              </p>
              <div className="flex py-2 px-2 rounded-b-xl bg-[#F0F0F0] flex-col sm:flex-row h-full">
                <div className="w-full sm:w-1/3">
                  <div className="flex items-center">
                    <Image
                      src={LocationImage}
                      alt="Ikona lokalizacji"
                      className="me-1"
                    />
                    <p className="font-bold text-md sm:text-lg">
                      {item.location}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={FloorImage}
                      alt="Ikona piętra"
                      className="me-1 ms-[2px] my-[6px]"
                    />
                    <p className="font-medium text-sm sm:text-md">
                      {item.flatNumber === "Parter"
                        ? "Parter"
                        : `${item.flatNumber} piętro`}
                    </p>
                  </div>
                  <div className="flex items-end">
                    <Image
                      src={RoomImage}
                      alt="Ikona pokoju"
                      className="me-1 ms-[2px]"
                    />
                    <p className="font-medium text-sm sm:text-md">
                      {item.roomsAmount === "1"
                        ? `${item.roomsAmount} pokój`
                        : item.roomsAmount >= "5" || item.roomsAmount === "0"
                        ? `${item.roomsAmount} pokoi`
                        : `${item.roomsAmount} pokoje`}
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-2/3">
                  <p className="leading-4 text-sm pt-2 pb-3 ms-0 sm:ms-12 ">
                    {item.description}
                  </p>
                  <p className="absolute right-2 bottom-1">
                    {item.metrics}m<sup>2</sup>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination className="mb-14">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  handlePageChange(currentPage - 1);
                  e.preventDefault();
                }}
                className={
                  currentPage === 1
                    ? "hidden"
                    : "bg-[#F4F4F4] hover:bg-[#cdcdcd] drop-shadow-lg"
                }
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    handlePageChange(index + 1);
                    e.preventDefault();
                  }}
                  className={`bg-[#F4F4F4] hover:bg-[#cdcdcd] drop-shadow-lg mx-1 ${
                    currentPage === index + 1 ? " opacity-50" : ""
                  }`}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  handlePageChange(currentPage + 1);
                  e.preventDefault();
                }}
                className={
                  currentPage === totalPages
                    ? "hidden"
                    : "bg-[#F4F4F4] hover:bg-[#cdcdcd] drop-shadow-lg"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default Home;
