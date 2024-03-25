import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
export const Box = () => {
  return (
    <div className="fixed bottom-0 right-0 flex items-center justify-center mb-8 mr-8">
      <div className="bg-customBlue shadow-chatShadow w-16 h-16 flex items-center justify-center rounded-full">
        <FontAwesomeIcon
          icon={faMessage}
          className="text-white hover:scale-90 duration-300 w-full"
        />
      </div>
    </div>
  );
};
