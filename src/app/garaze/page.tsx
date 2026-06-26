import React from "react";
import SubpageHero from "@/components/shared/SubpageHero";
import GarageFilter from "@/components/garages/filter/FilterGarage";

const page = () => {
  return (
    <>
      <SubpageHero title="Garaże" />
      <GarageFilter />
    </>
  );
};

export default page;
