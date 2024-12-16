import {} from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

type Props = {};

export default function CreditsHistoryCard({}: Props) {
  return (
    <section className="md:hidden w-full rounded-xl border-r-2 border-red-500  shadow-custom h-[10rem] flex justify-between gap-2  px-3 py-3 bg-white">
      <div className="w-[35%] h-full bg-red-200 flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 w-9 h-9 flex items-center justify-center rounded-full shadow-custom">
            <FaArrowTrendUp className="text-lg text-green-500" />
          </div>
          <h1 className="text-[1.4rem] text-green-500">+$900</h1>
        </div>
        <div className="">2</div>
      </div>
      <div className="w-[65%] h-full w-full bg-green-200 flex flex-col justify-between">
        <div>1</div>
        <div>2</div>
      </div>
    </section>
  );
}
