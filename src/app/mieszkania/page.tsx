import React from "react";
import SubpageHero from "@/components/shared/SubpageHero";
import FilterFlats from "@/components/flats/Filter/FilterFlats";

const page = () => {
  return (
    <>
      <SubpageHero title="Mieszkania" />
      <FilterFlats />
    </>
  );
};

export default page;
