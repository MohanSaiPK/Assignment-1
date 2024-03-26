import React from "react";
import { CustomerCard } from "./Cards/CustomerCard";

export const CustomerStory = () => {
  const customerData = [
    {
      desc: "A leading Biopharmaceuticals organization who are an early innovator of COVID-19 vaccine wanted to achieve an automated process for achieving data integrity and compliance...",
      title:
        "How Logilab SDMS helped a COVID vaccine manufacturer achieve Data Integrity, Compliance & Automation",
      imgSrc: "../../Logos/2.webp",
    },

    {
      desc: "Cord blood repositories today process several units which is becoming more and more difficult for such banks to use manual procedures to record information that called for by regulatory bodies like UFDA, AABB or FACT..",
      title: "Logilab SDMS and ELN in Cord Blood Repositories",
      imgSrc: "../../Logos/3.webp",
    },
    {
      desc: "The Zambian Bureau of Standards (ZABS) is a statutory body under the Ministry of Commerce Trade and Industry of Zambia, established in 1982...",
      title:
        "Enhancing Quality Standards: Zambian Bureau of Standards’ Successful Implementation of Qualis LIMS",
      imgSrc: "../../Logos/1.webp",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-y-10 md:py-28 md:scale-100 scale-75">
      <div className=" flex flex-col justify center space-y-12">
        <h2 className="text-4xl font-nunito font-black leading-9 text-customGrayText text-center">
          Customer Success Stories
        </h2>
        <div>
          <p className="font-nunito text-customGrayText  py-2 md:px-64 text-center text-lg ">
            Discover how our solutions have empowered labs across industries.
            From aiding a COVID-19 vaccine manufacturer in achieving Data
            Integrity, Compliance and Automation to streamlining Pharma
            manufacturing processes, our impact resonates across industries.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-16 ">
        <div className="md:flex-row flex flex-col md:gap-6 gap-3">
          {customerData.map((customer, index) => (
            <CustomerCard
              key={index}
              imgSrc={customer.imgSrc}
              title={customer.title}
              desc={customer.desc}
            />
          ))}
        </div>
        <button className="bg-customBlue text-white font-nunito font-bold py-3 px-6  rounded-sm hover:scale-95 duration-500 hover:font-semibold">
          View All
        </button>
      </div>
    </div>
  );
};
