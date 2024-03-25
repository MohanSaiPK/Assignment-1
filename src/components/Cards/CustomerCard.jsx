import PropTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const CustomerCard = ({ imgSrc, title, desc }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`w-[376px] shadow-xl rounded-lg flex flex-col justify-center space-y-6 h-[618px] relative ${
        hovered ? "overflow-hidden -translate-y-2 duration-500" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <img src={imgSrc} className="w-full" alt="Customer" />
      </div>
      <div className="p-4 leading-normal space-y-4 font-nunito h-1/2">
        <h6 className={`text-lg font-bold ${hovered ? "text-customBlue" : ""}`}>
          {title}
        </h6>
        <div className="text-base">{desc}</div>
      </div>
      <button
        className={`absolute left-0 bottom-0 w-full bg-white h-14 rounded-b-lg text-customBlue border-t-2 font-nunito overflow-hidden transition-all duration-500 ${
          hovered ? "text-white" : ""
        }`}
      >
        <div
          className={`absolute left-0 bottom-0 w-full bg-customBlue transition-all duration-500 ${
            hovered ? "h-full" : "h-0"
          }`}
        />
        <div className="flex justify-center items-center">
          <span className="absolute top-0 left-0 w-full h-full font-bold flex items-center justify-center">
            View case study
          </span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="absolute right-[108px] "
          />
        </div>
      </button>
    </div>
  );
};

CustomerCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
