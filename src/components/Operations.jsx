import "@fontsource-variable/nunito-sans";
import { useState } from "react";
export const Operations = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  return (
    <div className="bg-cover flex flex-col bg-center h-full justify-center bg-chemBG">
      <div className="flex flex-col items-center justify-center h-full mt-20 mb-10">
        <div className="md:max-w-7xl max-w-96 mx-auto">
          <div className="md:grid md:grid-cols-2 flex flex-col gap-10 justify-center  md:gap-16 z-0 ">
            <h1 className="md:text-4xl text-xl font-nunito font-extrabold md:w-full text-customGrayText leading-normal">
              Adhere to Industry standards, Follow Good Laboratory Practices &
              comply with 21 CFR Part 11 requirements
            </h1>
            <div className="  md:w-full">
              <div
                onMouseEnter={() => setHovered1(true)}
                onMouseLeave={() => setHovered1(false)}
                className={`flex shadow-xl p-2 md:p-4  gap-4 bg-white rounded-lg items-center ${
                  hovered1 ? "-translate-y-2 duration-500" : "translate-y-0"
                }`}
              >
                <img
                  src="../../Icons/icon1.png"
                  alt=""
                  className="w-12 h-12 md:w-[88px] md:h-[86px]"
                />
                <p className="font-nunito text-sm ">
                  Our solutions are designed to meet cGMP & GxP regulatory
                  guidelines effortlessly.
                </p>
              </div>
            </div>
            <div
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
              className={`flex shadow-xl p-2 md:p-4  gap-4 bg-white rounded-lg items-center ${
                hovered2 ? "-translate-y-2 duration-500" : "translate-y-0"
              }`}
            >
              <img
                src="../../Icons/icon2.png"
                alt=""
                className="w-12 h-12 md:w-[88px] md:h-[86px]"
              />
              <p className="font-nunito text-sm">
                Ensure adherence to regulatory compliance standards like{" "}
                <b>US FDA 21 CFR Part 11,</b> EudraLex annex 11, ISO 17025, and
                other industry standards
              </p>
            </div>
            <div
              onMouseEnter={() => setHovered3(true)}
              onMouseLeave={() => setHovered3(false)}
              className={`flex shadow-xl p-2 md:p-4  gap-4 bg-white rounded-lg items-center ${
                hovered3 ? "-translate-y-2 duration-500" : "translate-y-0"
              }`}
            >
              <img
                src="../../Icons/icon3.png"
                alt=""
                className="w-12 h-12 md:w-[88px] md:h-[86px]"
              />
              <p className="font-nunito text-sm">
                Adopt efficient, compliant, and paperless processes that
                strictly adhere to data integrity principles.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-20 relative justify-center text-center items-center">
        <button className="bg-customBlue text-white font-nunito font-bold rounded-sm p-3 duration-500 hover:scale-95 hover:font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
};
