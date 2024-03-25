import "@fontsource-variable/nunito-sans";
import { useState } from "react";
export const Operations = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  return (
    <div className="bg-cover bg-center h-screen bg-chemBG">
      <div className="flex gap-10 pt-20 px-28 pb-8 h-1/2">
        <h1 className="text-4xl font-nunito font-extrabold w-1/2 text-customGrayText leading-normal">
          Adhere to Industry standards, Follow Good Laboratory Practices &
          comply with 21 CFR Part 11 requirements
        </h1>
        <div className=" w-1/2">
          <div
            onMouseEnter={() => setHovered1(true)}
            onMouseLeave={() => setHovered1(false)}
            className={`flex shadow-xl   p-4  gap-4 bg-white rounded-lg ${
              hovered1 ? "-translate-y-2 duration-500" : "translate-y-0"
            }`}
          >
            <img src="../../Icons/icon1.png" alt="" />
            <p className="font-nunito font-base ">
              Our solutions are designed to meet cGMP & GxP regulatory
              guidelines effortlessly.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-16 px-28    justify-center">
        <div
          onMouseEnter={() => setHovered2(true)}
          onMouseLeave={() => setHovered2(false)}
          className={`flex shadow-xl h-44  p-4 w-1/2  gap-4 items-center bg-white rounded-lg ${
            hovered2 ? "-translate-y-2 duration-500" : "translate-y-0"
          }`}
        >
          <img src="../../Icons/icon2.png" alt="" />
          <p className="font-nunito font-base">
            Ensure adherence to regulatory compliance standards like{" "}
            <b>US FDA 21 CFR Part 11,</b> EudraLex annex 11, ISO 17025, and
            other industry standards
          </p>
        </div>

        <div
          onMouseEnter={() => setHovered3(true)}
          onMouseLeave={() => setHovered3(false)}
          className={`w-1/2 flex shadow-xl h-36  p-4 items-center gap-4 bg-white rounded-lg ${
            hovered3 ? "-translate-y-2 duration-500" : "translate-y-0"
          }`}
        >
          <img src="../../Icons/icon3.png" alt="" />
          <p className="font-nunito font-base">
            Adopt efficient, compliant, and paperless processes that strictly
            adhere to data integrity principles.
          </p>
        </div>
      </div>
      <div className="py-20 justify-center text-center items-center">
        <button className="bg-customBlue text-white font-nunito font-bold rounded-sm p-3 duration-500 hover:scale-95 hover:font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
};
