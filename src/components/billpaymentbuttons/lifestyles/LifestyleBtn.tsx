import {} from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

type Props = {};

function LifestyleBtn({}: Props) {
  return (
    <div className="box box6 flex flex-col gap-1">
      <HiOutlineShoppingBag className="text-red-500 text-xl" />
      <p className="text-xs text-red-500">LifeStyle</p>
    </div>
  );
}

export default LifestyleBtn;
