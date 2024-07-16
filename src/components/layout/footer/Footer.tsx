import React from "react";
import Image from "next/image";
import CompanyLogo from "/public/assets/navbar/menu_logo.svg";

const Footer = () => {
  return (
    <div className="w-screen h-full bg-[#2F2F2F] text-white flex flex-col md:flex-row items-center justify-center gap-[10%] lg:gap-[15%] xl:gap-[30%] py-24">
      <div className="w-[200px] flex flex-col items-center justify-center">
        <Image src={CompanyLogo} width={150} height={120} alt="Company Logo" />
        <hr className="w-full h-1 bg-[#008EF4] border-none my-2" />
        <h1>Company Name</h1>
        <h2>NIP: Lorem Ipsum</h2>
        <h2>REGON: Lorem ipsum</h2>
        <br />
        <h2>Postal Code, City</h2>
        <h2>Street name, number</h2>
      </div>
      <div className="flex flex-col sm:flex-row border-t-4 border-[#008EF4] pt-2 px-6 gap-6 sm:gap-[100px] mt-16 sm:">
        <div>
          <h1 className="uppercase font-bold text-xl">Szybki kontakt</h1>
          <p className="text-slate-400 text-sm mt-4">Zadzwoń do nas:</p>
          <h2 className="text-lg">Tel: Lorem Ipsum</h2>
          <p className="text-slate-400 text-sm mt-4">Napisz do nas:</p>
          <h2 className="text-lg">E-mail: Lorem Ipsum</h2>
        </div>
        <div>
          <ul className="flex items-center justify-center flex-col">
            <li>
              <a href="#">Oferta</a>
            </li>
            <li className="my-1">
              <a href="#">Realizacje</a>
            </li>
            <li>
              <a href="#">Polityka prywatności</a>
            </li>
          </ul>
          <div className="flex justify-center items-center mt-3">sociale</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
