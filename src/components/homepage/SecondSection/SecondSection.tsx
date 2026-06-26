import Images from "./Images/Images";

const SecondSection = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24 relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 lg:mb-20">
        <div className="md:w-1/2">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="font-jost text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003861] uppercase tracking-wide">
              Z NAMI ZYSKUJESZ
            </h2>
          </div>
          <div className="w-20 h-1.5 bg-[#008EF4] rounded-full" />
        </div>

        <p className="md:w-1/2 text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in ex
          elementum neque scelerisque interdum. Fusce ultrices consequat dui quis
          laoreet. Nullam dapibus venenatis erat in aliquet.
        </p>
      </div>

      <Images />
    </div>
  );
};

export default SecondSection;
