import {} from "react";
import { BsPhoneFlip } from "react-icons/bs";

type Props = {};

function DataBills({}: Props) {
  return (
    <button className="box box2 flex flex-col gap-1">
      <BsPhoneFlip className="text-red-500 text-xl" />
      <p className="text-xs text-red-500">Data</p>
    </button>
  );
}

export default DataBills;
