import React from "react";
import SubpageHero from "@/components/shared/SubpageHero";
import HouseFilter from "@/components/houses/filter/FilterHouse";

const page = () => {
  return (
    <>
      <SubpageHero title="Domy" />
      <HouseFilter />
    </>
  );
};

export default page;
