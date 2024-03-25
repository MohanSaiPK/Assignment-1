import React from "react";

export const GetStarted = () => {
  return (
    <div className="bg-getStartedBG bg-customBlue flex ">
      <div className="flex  mx-40  justify-center items-center py-16 ">
        <div className="flex flex-col justify-center items-center">
          <div className=" space-y-8 ">
            <h2 className="text-4xl font-nunito font-black leading-9 text-white ">
              Get Started with our Products & Services
            </h2>

            <p className="font-nunito text-white text-lg ">
              Witness the power of our products first-hand. Request a demo today
              and let us show you the future of laboratory operations.
            </p>
            <button className="bg-customGreen text-white font-nunito font-bold p-3 my-4 rounded-sm hover:bg-[#2384fb] duration-500 hover:scale-95 hover:font-semibold">
              Request Demo
            </button>
          </div>
        </div>
        <div className="flex">
          <img src="../Banner/contact-footer.png"></img>
        </div>
      </div>
    </div>
  );
};
