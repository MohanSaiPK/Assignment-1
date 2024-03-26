import React from "react";
import { AboutCards } from "./Cards/AboutCards";
import { SocialIcon } from "react-social-icons";

export const About = () => {
  const socialIconStyle = {
    width: 30, // Adjust the width as needed
    height: 30, // Adjust the height as needed
  };
  const twitterComponent = (
    <SocialIcon url="https://twitter.com " style={socialIconStyle} />
  );
  const fbComponent = (
    <SocialIcon url="http://www.facebook.com" style={socialIconStyle} />
  );
  const linkedinComponent = (
    <SocialIcon url="http://www.linkedin.com" style={socialIconStyle} />
  );
  const ytComponent = (
    <SocialIcon url="http://www.youtube.com" style={socialIconStyle} />
  );

  const aboutData = [
    {
      title: "Products",
      subArr: [
        "Qualis LIMS",
        "Logilab SDMS",
        "Logilab ELN",
        "Qualis DMS",
        "Interfacer Middleware",
      ],
    },
    {
      title: "Services",
      subArr: [
        "Professional Services",
        "Implementation Methodology",
        "Training",
        "Support",
      ],
    },
    {
      title: "About Us",
      subArr: [
        "Company",
        "Customers",
        "Partners",
        "Careers",
        "Quality Certifications",
        "Contact Us",
      ],
    },
    {
      title: "Legal",
      subArr: ["Terms & Conditions", "Privacy Policy", "Refund Policy"],
    },
  ];
  return (
    <div className="flex   justify-center md:py-4 pb-4">
      <div className="flex flex-col w-10/12 pt-28 space-y-6">
        <div className="md:flex grid grid-cols-2 gap-10  justify-end  ">
          <div className="flex flex-col md:w-2/6 space-y-6">
            <div>
              <img src="../Logos/logo-blue.png" width="160px"></img>
            </div>
            <div className="flex flex-col md:pl-12 font-nunito w-2/3 ">
              <h6 className="text-base  font-bold leading-10 text-customGrayText">
                Global HQ
              </h6>
              <p className="text-sm text-gray-500 font-bold leading-6">
                510, Alpha Wing, 306, Raheja Towers, Anna Salai, Chennai-600
                002, Tamilnadu, India.
              </p>
            </div>
          </div>
          {aboutData.map(({ title, subArr }, index) => (
            <div className="w-2/6" key={index}>
              <AboutCards title={title} subArr={subArr} />
            </div>
          ))}
        </div>
        <div>
          <img
            src="../Banner/footer-img.png"
            className="md:w-11/12 md:pl-10 my-5"
          ></img>
        </div>
        <div className="w-11/12 md:pl-10">
          <div className="flex justify-between items-center">
            <p className="font-nunito md:text-sm text-sm text-gray-500">
              Copyright © Agaram Technologies Pvt Ltd 2023-2024. All rights
              reserved
            </p>
            <div className="flex space-x-2">
              <div>{fbComponent}</div>
              <div>{twitterComponent}</div>
              <div>{linkedinComponent}</div>
              <div>{ytComponent}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
