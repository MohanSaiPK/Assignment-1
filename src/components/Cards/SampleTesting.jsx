import PropTypes from "prop-types";
import { useState } from "react";

export const SampleTesting = ({ data }) => {
  const { image, desc, cardImage, bigImage, cardText } = data;
  const [hovered, setHovered] = useState(Array(cardImage.length).fill(false));

  const handleHover = (index) => {
    const updatedHovered = Array(cardImage.length).fill(false);
    updatedHovered[index] = true;
    setHovered(updatedHovered);
  };

  const handleMouseLeave = () => {
    setHovered(Array(cardImage.length).fill(false));
  };

  return (
    <div className="flex flex-col">
      <div className="flex mt-6 mb-20">
        <img src={image} className="w-32 h-14"></img>
        <div className="w-2 pb-16 ml-4 bg-customBlue"></div>
        <p className="px-24 text-base leading-6 text-start">{desc}</p>
      </div>
      <div className={`flex justify-center`}>
        <div className="mr-6 space-y-2">
          {cardImage.map((img, index) => (
            <div
              key={index}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleMouseLeave}
              className={`flex p-6 rounded-lg justify-start items-center space-x-4 ${
                hovered[index]
                  ? "bg-white -translate-y-2 duration-300 shadow-xl"
                  : ""
              }`}
            >
              <img src={img} className="w-8 h-8"></img>
              <p className="font-bold text-start text-[15px] w-52">
                {cardText[index]}
              </p>
            </div>
          ))}
        </div>
        <div>
          <img src={bigImage} className="w-10/12 pl-10 ml-20"></img>
        </div>
      </div>
      <button className="bg-customBlue text-white font-nunito font-semibold rounded-sm p-3 ml-8 w-40 duration-500 hover:scale-95 hover:font-semibold">
        Learn More
      </button>
    </div>
  );
};

SampleTesting.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    cardImage: PropTypes.arrayOf(PropTypes.string).isRequired,
    bigImage: PropTypes.string.isRequired,
    cardText: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
