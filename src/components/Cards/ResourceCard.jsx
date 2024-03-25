import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const ResourceCard = (props) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-96 flex flex-col items-center justify-center cursor-pointer font-nunito p-5 relative"
    >
      <div className="w-full shadow-lg rounded-lg flex flex-col items-center justify-center">
        <img src={props.imgSrc} alt="Resource" />
        <h6 className="p-[25px] font-bold ">{props.title}</h6>
        <button
          className={`relative h-14 w-full border-t-2 font-bold overflow-hidden z-10 ${
            hovered ? "text-white" : "text-customBlue"
          }`}
        >
          <div
            className={`absolute left-0 bottom-0 w-full bg-customBlue transition-all duration-500 rounded-b-lg ${
              hovered ? "h-full" : "h-0"
            }`}
          />
          <div className="flex items-center">
            <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              {props.button}
            </span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="absolute right-28 "
            />
          </div>
        </button>
      </div>
    </div>
  );
};

ResourceCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};
