import GalleryImages from "./GalleryImages/GalleryImages";

const Gallery = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <div className="flex items-center justify-between gap-6 mb-12">
        <div className="flex-grow h-0.5 bg-gradient-to-r from-transparent to-[#008EF4]" />
        <h2 className="font-jost text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003861] uppercase tracking-wider whitespace-nowrap px-4">
          Galeria
        </h2>
        <div className="flex-grow h-0.5 bg-gradient-to-l from-transparent to-[#008EF4]" />
      </div>
      <GalleryImages />
    </div>
  );
};

export default Gallery;
