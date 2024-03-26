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
    <div className="flex flex-col  md:w-full space-y-4 md:space-y-0 ">
      <div className="flex mt-6 mb-20 space-x-6">
        <img src={image} className="w-32 h-14"></img>
        <div className="w-2 md:w-2 pb-16 ml-4  bg-customBlue"></div>
        <p className="md:px-24 md:text-base text-xs  md:w-full leading-6 text-start  md:whitespace-normal ">
          {desc}
        </p>
      </div>
      <div>
        <div className={`flex flex-col-reverse md:flex-row justify-center`}>
          <div className="md:mr-6 md:space-y-2 space-y-4 md:flex md:flex-col grid grid-cols-2 pl-6 gap-2 md:gap-0 ">
            {cardImage.map((img, index) => (
              <div
                key={index}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleMouseLeave}
                className={`flex p-2   md:p-6 rounded-lg items-center justify-center space-x-2  md:space-x-4 ${
                  hovered[index]
                    ? "bg-white -translate-y-2 duration-300 shadow-xl"
                    : ""
                }`}
              >
                <img
                  src={img}
                  className="md:w-8 w-1/5 h-6 md:h-8 pl-2 md:pl-0 "
                ></img>

                <p className="md:font-bold text-start text-sm md:text-[15px] w-52">
                  {cardText[index]}
                </p>
              </div>
            ))}
          </div>
          <div>
            <img src={bigImage} className="w-10/12 pl-10 md:ml-20"></img>
          </div>
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
