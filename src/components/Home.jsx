import { useState, useEffect } from "react";

export const Home = () => {
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    // Set initial render to false after component mounts
    setInitialRender(false);
  }, []);

  return (
    <div
      className={`bg-customBlue grid grid-cols-4 pb-32 w-100 transition-all duration-${
        initialRender ? "500" : "0"
      }ms`}
    >
      {/* Left Image */}
      <img
        src="../Banner/banner-img2.webp"
        className="justify-self-start w-[296px]"
      />

      {/* Middle Content */}
      <div className="m-y-0 flex flex-col relative justify-center items-center w-100 col-span-2">
        <h1 className="font-nunito text-white text-5xl overflow-visible font-bold text-center pb-4">
          Paperless Solutions for Quality Control, Research & Compliance
        </h1>
        <p className="text-white font-nunito text-xl">
          Designed for Labs of the future.
        </p>
        <button className="bg-customGreen text-white font-nunito font-bold w-40 p-3 my-4 rounded-sm duration-500 hover:bg-[#2384fb] hover:scale-95 hover:font-semibold">
          Request a Demo
        </button>
      </div>

      {/* Right Image */}
      <img
        src="../Banner/banner-img1.webp"
        className="justify-self-end w-[296px]"
      />
    </div>
  );
};
