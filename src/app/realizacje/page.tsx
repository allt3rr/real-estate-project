import React from "react";
import SubpageHero from "@/components/shared/SubpageHero";
import RealizationsItems from "@/components/realizations/RealizationsItems";

const page = () => {
  return (
    <>
      <SubpageHero title="Realizacje" />
      <RealizationsItems />
    </>
  );
};

export default page;
