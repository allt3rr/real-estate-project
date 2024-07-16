import React from "react";

const Circle = ({ children }: any) => {
  return (
    <div className="w-11/12 sm:w-10/12 lg:w-9/12 aspect-square bg-white shadow-2xl absolute top-0 left-0 rounded-full -translate-x-20 -translate-y-20 sm:-translate-x-60 sm:-translate-y-56 z-20 xl:-translate-y-96">
      <div className="w-11/12 aspect-square bg-[#F4F4F4] z-40 rounded-full">
        <div className="translate-x-20 translate-y-20 xstranslate-y-24 sm:translate-x-60 sm:translate-y-60 lg:translate-y-80 xl:translate-y-96">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Circle;
