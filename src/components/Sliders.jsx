import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Sliders = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const data = [
    {
      id: 1,
      img: "../Slides/pharma.png",
      title: "Pharmaceutical",
      desc: "Driven by regulatory compliance and having to ship products across the globe, it becomes all the more complex for the pharmaceutical",
    },
    {
      id: 2,
      img: "../Slides/bio.png",
      title: "Life Science & BioTech",
      desc: "The life sciences industry is moving towards a customized solution for individual patients using advanced biotechnology.",
    },
    {
      id: 3,
      title: "Contract Research Organisation",
      img: "../Slides/cro.png",
      desc: "Driven by regulatory compliance and having to ship products across the globe, it becomes all the more complex for the pharmaceutical",
    },
    {
      id: 4,
      title: "Healthcare & Diagnostics",
      img: "../Slides/health.png",
      desc: "Qualis Clinical Laboratory Information Management System helps hospitals and referral diagnostic laboratories in achieving operational excellence.",
    },
    {
      id: 5,
      title: "Dairy, Food & Beverage",
      img: "../Slides/dairy.png",
      desc: "Qualis Clinical Laboratory Information Management System helps hospitals and referral diagnostic laboratories in achieving operational excellence.",
    },
    {
      id: 6,
      title: "Oil & Gas Industry",
      img: "../Slides/health.png",
      desc: "Qualis Clinical Laboratory Information Management System helps hospitals and referral diagnostic laboratories in achieving operational excellence.",
    },
    {
      id: 7,
      title: "Chemical Industry",
      img: "../Slides/chemic.png",
      desc: "Qualis Clinical Laboratory Information Management System helps hospitals and referral diagnostic laboratories in achieving operational excellence.",
    },
    {
      id: 8,
      title: "Process Manufacturing",
      img: "../Slides/man.png",
      desc: "Qualis Clinical Laboratory Information Management System helps hospitals and referral diagnostic laboratories in achieving operational excellence.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="flex flex-col bg-gray-100 pb-32">
      <div className="items-center justify-center text-center mt-10 pt-32 ">
        <h1 className="text-4xl font-nunito/900 font-bold leading-normal text-customGrayText pb-3">
          Global Presence across Regulated and<br></br> Non-Regulated Industries
        </h1>
        <p className="font-nunito text-customGrayText py-4 leading-normal pt-3 ">
          Headquartered in Chennai, Agaramtech delivers its software solutions
          to over 30+ countries worldwide,<br></br> catering to diverse
          industries such as Pharmaceuticals, Life-Sciences and <br></br>{" "}
          Biotech, Healthcare and Diagnostics, Dairy, Food & Beverage, Oil &
          Gas, Chemical, Process Manufacturing, Environment, etc
        </p>
      </div>
      <div className=" justify-center m-auto w-3/4 pt-8 ">
        <div className="  ">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div
                key={d.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`shadow-sm my-4 justify-center items-center rounded-xl h-1/2 flex flex-col bg-white ${
                  hoveredIndex === index ? "-translate-y-2 duration-500" : ""
                }`}
              >
                <div className={`p-6 space-y-4 `}>
                  <div className="flex justify-center">
                    <img src={d.img} alt="" className="w-auto h-20" />
                  </div>
                  <div className="flex flex-col justify-center items-center space-y-6">
                    <h4
                      className={`text-black whitespace-nowrap  text-xl font-semibold ${
                        hoveredIndex === index ? "text-customBlue" : ""
                      }`}
                    >
                      {d.title}
                    </h4>
                    <p className=" text-base">{d.desc}</p>
                  </div>
                </div>
                <div className="flex justify-center  h-14 border-t">
                  <button
                    className={`flex-grow font-semibold rounded-b-xl relative ${
                      hoveredIndex === index ? "text-white " : "text-customBlue"
                    }`}
                  >
                    <div
                      className={`absolute left-0 bottom-0 w-full h-0 bg-customBlue rounded-b-lg ${
                        hoveredIndex === index ? "h-full" : "h-0"
                      } transition-height duration-500`}
                    />
                    <div className="flex items-center">
                      <span className="absolute font-nunito py-4 z-50 top-0 left-0 w-full h-full flex items-center justify-center">
                        Read More
                      </span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="absolute right-[108px] "
                      />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
