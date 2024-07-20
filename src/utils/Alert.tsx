"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

const Alert = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      className={`w-screen h-screen bg-[rgba(0,0,0,0.5)] fixed z-[999] text-black flex items-center justify-center ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      <div className="w-11/12 sm:w-5/6 md:w-1/2 bg-[rgba(255,255,255,0.9)] p-6 relative rounded">
        <Link
          href="#"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          <span className="absolute top-2 right-2 bg-red-500 px-3 rounded-3xl font-semibold hover:scale-105">
            X
          </span>
        </Link>
        <p className="font-medium mb-4">Cześć! 👋</p>
        <p>
          Witaj na stronie przygotowanej pod pracę portfolio, główne funkcje
          witryny:
        </p>
        <ul className="list-disc ms-6">
          <li>W pełni funkcjonalny formularz filtrujący,</li>
          <li>Dynamiczne generowanie zawartości podstron,</li>
          <li>Slider ze zdjęciami,</li>
          <li>Google API - mapy google,</li>
          <li>Formularz kontaktowy,</li>
        </ul>
        <p className="mt-4 font-medium">Miłego oglądania! 😊</p>
      </div>
    </div>
  );
};

export default Alert;
