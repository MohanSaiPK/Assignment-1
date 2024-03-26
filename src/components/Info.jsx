import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export const Info = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="md:mt-20  scale-75 md:scale-100  flex justify-center md:mx-20">
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="">
          <div className="max-w-7xl flex flex-col justify-center items-center space-y-8">
            <h3 className="text-4xl font-nunito font-black leading-9 text-center text-customGrayText">
              Over Six Decades of Laboratory Knowledge
            </h3>
            <div className="max-w-3xl">
              <p className="font-nunito text-customGrayText py-2  text-center text-lg ">
                Established in 1959, Agaram has been a part of the laboratory
                space for the last 6 decades. Our team has over 25 years of
                experience in the design & development of laboratory informatics
                solutions.
              </p>
            </div>
            <img src="../client-img.png" alt="" className="w-10/12 h-auto" />
            <div className="flex md:space-x-48 space-x-10 ">
              <div className="flex flex-col justify-center items-center space-y-6">
                <h6 className="text-6xl font-nunito font-bold leading-10 text-customGrayText flex justify-center items-center">
                  {counterOn && (
                    <CountUp start={0} end={100} duration={3} delay={0} />
                  )}{" "}
                  +
                </h6>

                <h6 className="text-xl font-nunito font-medium leading-6 text-customGrayText">
                  Customers
                </h6>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6">
                <h6 className="text-6xl font-nunito font-bold leading-10 text-customGrayText flex justify-center">
                  {counterOn && (
                    <CountUp start={0} end={30} duration={3} delay={0} />
                  )}{" "}
                  +
                </h6>
                <h6 className="text-xl font-nunito font-medium leading-6 text-customGrayText">
                  Countries
                </h6>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6">
                <h6 className="text-6xl font-nunito font-bold leading-10 text-customGrayText flex justify-center">
                  {counterOn && (
                    <CountUp start={0} end={25} duration={3} delay={0} />
                  )}
                  +
                </h6>

                <h6 className="text-xl font-nunito font-medium leading-6 text-customGrayText">
                  Years of Experience
                </h6>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};
