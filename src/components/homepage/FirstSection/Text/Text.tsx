"use client";

import { useMediaQuery } from "@/hooks/isMobile";

const Text = () => {
  const isMobile = useMediaQuery();

  return isMobile ? (
    <h2 className="w-2/4 sm:w-1/2 md:w-1/3 ms-8 sm:ms-12 md:ms-28 lg:ms-36 xl:ms-44 sm:mt-4 text-sm sm:text-base md:text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in ex
      elementum neque scelerisque interdum.
    </h2>
  ) : (
    <h2 className="w-2/4 sm:w-1/2 md:w-1/3 ms-8 sm:ms-12 md:ms-28 lg:ms-36 xl:ms-44 sm:mt-4 text-sm sm:text-base md:text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in ex
      elementum neque scelerisque interdum. Fusce ultrices consequat dui quis
      laoreet. Nullam dapibus venenatis erat in aliquet.
    </h2>
  );
};

export default Text;
