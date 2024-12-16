import {} from "react";
import { BsFileBarGraph } from "react-icons/bs";

type Props = {};

function AirtimeBills({}: Props) {
  return (
    <button className="box box1 flex flex-col gap-1">
      <BsFileBarGraph className="text-red-500 text-xl" />
      <p className="text-xs text-red-500">Airtime</p>
    </button>
  );
}

export default AirtimeBills;
