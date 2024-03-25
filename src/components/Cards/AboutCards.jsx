import React from "react";
import PropTypes from "prop-types";

export const AboutCards = (props) => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  return (
    <div>
      <div>
        <h6 className="text-base font-nunito font-bold leading-10 text-customGrayText">
          {props.title}
        </h6>
      </div>
      <div className="flex flex-col w-40 space-y-5">
        {props.subArr.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a
              className={`text-sm font-nunito font-bold   ${
                hoveredIndex === index ? "text-customBlue" : "text-gray-500"
              }
                           relative hover:text-customBlue cursor-pointer
                           transition-all before:content-[''] before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-0.5 before:opacity-0
                           before:transition-all before:duration-500 before:bg-[#d2a98e] hover:before:w-full hover:before:opacity-100`}
            >
              {item}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

AboutCards.propTypes = {
  title: PropTypes.string.isRequired,
  subArr: PropTypes.array.isRequired,
};
