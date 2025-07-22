import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-700 px-12 py-8 relative">
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-2">
        <div className="text-white text-center space-y-2">
          <h1 className="text-2xl md:text-6xl font-bold uppercase">
            Summer Sales
          </h1>
          <p>Enjoy discounts on selected items</p>
          <h3 className="text-xl md:text-4xl font-bold uppercase text-yellow-300">
            Get 50% off
          </h3>
        </div>
        <div className="w-1/2 md:w-1/3 relative aspect-video">
          <Image
            src={"/banner-image.png"}
            fill
            alt="Image Banner"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
