import {} from "react";
import { FaArrowTrendDown } from "react-icons/fa6";

type Props = {};

function DebitsHistoryCard({}: Props) {
  return (
    <div className="md:hidden w-full rounded-xl border-r-2 border-red-500  shadow-custom h-[10rem] flex flex-col gap-3 flex flex-col px-3 py-3 bg-white">
      <div className="flex h-[50%] justify-between items-center gap-4">
        <div className="w-[9rem] h-full flex gap-2">
          <div className="p-2 w-9 h-9 flex items-center justify-center rounded-full shadow-custom">
            <FaArrowTrendDown className="text-lg text-red-500" />
          </div>
          <h1 className="text-[1.7rem] text-red-500">-$900</h1>
        </div>
        <div className="w-full max-w-[20rem] h-full flex justify-between">
          <div className="">
            <p className="text-gray-500 md:hidden">ID</p>
            <p className="text-gray-500 md:hidden">134345....</p>
          </div>
          <div className="">
            <p className="text-gray-500 md:hidden">From</p>
            <h1 className="text-[1.1rem] text-gray-500">Onai..</h1>
          </div>
        </div>
      </div>
      <div className="flex h-[50%] justify-between items-center gap-4 flex-row-reverse">
        <div className="w-full max-w-[13.9rem] h-full flex justify-between">
          <div className="">
            <p className="text-gray-500">Bank Name</p>
            <h1 className="text-[1.1rem] text-gray-500">Olando</h1>
          </div>
          <div className="">
            <p className="text-gray-500">Recipient</p>
            <h1 className="text-[1.1rem] text-gray-500">Mov...</h1>
          </div>
        </div>
        <h1 className="text-[1.2rem] px-2 py-2 bg-gray-100 rounded-lg text-green-500">
          Success
        </h1>
      </div>
    </div>
  );
}

export default DebitsHistoryCard;
