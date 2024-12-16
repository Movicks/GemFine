import {} from "react";
import { TfiMore } from "react-icons/tfi";

type Props = {};

function MoreBtns({}: Props) {
  return (
    <button className="box box4 flex flex-col gap-1">
      <TfiMore className="text-red-500 text-xl" />
      {/* <p className='text-xs text-red-500 md:text-gray-500'>More</p> */}
    </button>
  );
}

export default MoreBtns;
