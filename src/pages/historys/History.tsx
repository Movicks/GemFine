import {} from "react";
// import { HistoryTable } from '../../components/historycards/HistoryTable'
import CreditsHistoryCard from "./../../components/historycards/CreditsHistoryCard";
// import DebitsHistoryCard from "../../components/historycards/DebitsHistoryCard";

const History = () => {
  return (
    <div className="w-full h-full overflow-hidden flex flex-col gap-2 px-1 md:px-4 text-gray-500 py-4">
      <h1 className="text-[1.5rem]">All transactions</h1>
      <CreditsHistoryCard />
      {/* <HistoryTable /> */}
      {/* <DebitsHistoryCard /> */}
    </div>
  );
};

export default History;
