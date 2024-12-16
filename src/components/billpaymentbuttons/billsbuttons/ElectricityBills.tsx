import {} from "react";
import { FaRegLightbulb } from "react-icons/fa";

type Props = {};

function ElectricityBills({}: Props) {
  return (
    <button className="box box3 flex flex-col gap-1">
      <FaRegLightbulb className="text-red-500 text-xl" />
      <p className="text-xs text-red-500">Electric</p>
    </button>
  );
}

export default ElectricityBills;
