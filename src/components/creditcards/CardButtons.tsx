import { BsPatchQuestion, BsSnow2 } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { TfiMore } from "react-icons/tfi";

interface CardButtonsProps {
  freeze: boolean;
  onToggleFreeze: () => void;
}

const CardButtons: React.FC<CardButtonsProps> = ({
  freeze,
  onToggleFreeze,
}) => {
  return (
    <div className="flex justify-between md:justify-start px-5">
      <div className="flex flex-col items-center justify-center gap-1 max-w-[5.5rem] w-full">
        <button className="w-[3.5rem] h-[3.5rem] flex items-center justify-center shadow-custom rounded-lg bg-redGradient">
          <BsPatchQuestion className="text-3xl text-white" />
        </button>
        <p className="text-center text-gray-500 text-[0.8rem]">Details</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-1 max-w-[5.5rem] w-full">
        <button className="w-[3.5rem] h-[3.5rem] flex items-center justify-center shadow-custom rounded-lg border-2 border-red-500 bg-white">
          <FaPlus className="text-2xl text-red-500" />
        </button>
        <p className="text-center text-gray-500 text-[0.8rem]">Add Money</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-1 max-w-[5.5rem] w-full">
        <button
          className={`w-[3.5rem] h-[3.5rem] flex items-center justify-center shadow-custom rounded-lg border-2 border-red-500 bg-white`}
          onClick={onToggleFreeze}
        >
          <BsSnow2
            className={`text-3xl ${freeze ? "text-gray-400" : "text-red-500"}`}
          />
        </button>
        <p className="text-center text-gray-500 text-[0.8rem]">
          {freeze ? "Unfreeze Card" : "Freeze Card"}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-1 max-w-[5.5rem] w-full">
        <button className="w-[3.5rem] h-[3.5rem] flex items-center justify-center shadow-custom rounded-lg border-2 border-red-500 bg-white">
          <TfiMore className="text-2xl text-red-500" />
        </button>
        <p className="text-center text-gray-500 text-[0.8rem]">More</p>
      </div>
    </div>
  );
};

export default CardButtons;
