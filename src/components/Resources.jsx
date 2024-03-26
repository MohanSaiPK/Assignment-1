import React from "react";

import { ResourceCard } from "./Cards/ResourceCard";

export const Resources = () => {
  const resourceData = [
    {
      title: "Brochures",
      button: "Download",
      imgSrc: "../Logos/b.jpg",
    },
    {
      title: "Blogs",
      button: "Read Now",
      imgSrc: "../Logos/c.jpg",
    },
    {
      title: "Publications",
      button: "Download",
      imgSrc: "../Logos/w.jpg",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center p-24 bg-gray-100">
      <div className="flex flex-col md:items-start justify-center items-center pt-14">
        <div className="text-start md:w-1/2 ">
          <h2 className="text-3xl font-nunito font-black leading-9 text-customGrayText ">
            Resources and Learning
          </h2>

          <p className="font-nunito text-customGrayText py-2 text-[17px] ">
            Stay updated with our latest brochures, blogs, and white papers.
            Dive deep into the potential of our solutions and how they can
            benefit your team.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col  pt-16 ">
        {resourceData.map((resource, index) => (
          <ResourceCard
            imgSrc={resource.imgSrc}
            title={resource.title}
            button={resource.button}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
