import React, { useState } from "react";
import Chart from "./Chart";
import { MonthlyTransaction, ChartData, YearlyTransactionData } from './type'; // Import types
import { transactionDatas } from "./CardTransactionDatas";

const VirtualATMCardChart: React.FC = () => {
  // State for filter
  const [filterText, setFilterText] = useState<string>("");

  // Use the data as YearlyTransactionData[] type
  const transactionData: YearlyTransactionData[] = transactionDatas;

  // Filter out failed transactions from all transactions in monthly data
  const filteredData = transactionData
    .flatMap((yearData) => yearData.monthly)
    .flatMap((monthData) => monthData.transactions)
    .filter((tx) => tx.status !== "failed");

  // Filter credit and debit transactions
  const creditTransactions = filteredData.filter((tx) => tx.type === "credit");
  const debitTransactions = filteredData.filter((tx) => tx.type === "debit");

  // Apply filter criteria (filter by date in this example)
  const filteredCreditTransactions = creditTransactions.filter((tx) =>
    tx.date.includes(filterText),
  );
  const filteredDebitTransactions = debitTransactions.filter((tx) =>
    tx.date.includes(filterText),
  );

  // Handle filter input change
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  // Transform the transactionData to match the structure expected by BarChart
  const data: ChartData[] = transactionData[0].monthly.map((monthData: MonthlyTransaction) => {
    const cost = monthData.transactions.filter(transaction => transaction.type === 'debit' && transaction.status === 'success')
      .reduce((acc, transaction) => acc + transaction.amount, 0);
    const income = monthData.transactions.filter(transaction => transaction.type === 'credit' && transaction.status === 'success')
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    return {
      label: monthData.month,
      cost,
      income
    };
  });

  return (
    <div className="flex justify-center flex-col gap-2">
      <div className="w-full max-w-xl sm:max-w-xl md:max-w-xl lg:max-w-2xl xl:max-w-4xl max-h-[400px] bg-white shadow-custom rounded-lg">
        <Chart data={data} />
      </div>

      {/* Summary Section */}
      <div className="flex flex-col w-full bg-white px-3 py-5 gap-3 rounded-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-[22px] text-gray-600">Analysis</h1>
          <div className="border-2 border-red-500 h-9 rounded-lg bg-redGradient overflow-hidden">
            <input
              type="date"
              placeholder="Filter"
              value={filterText}
              onChange={handleFilterChange}
              className="custom-input border-none outline-none text-white px-2 py-1 h-full bg-transparent"
            />
          </div>
        </div>

        {/* Credit Transactions Summary */}
        <span className="text-gray-500">
          Total Credits: {filteredCreditTransactions.length}
        </span>
        <ul className="flex flex-wrap gap-2 max-h-[30rem] overflow-y-auto">
          {filteredCreditTransactions.map((tx) => (
            <li
              key={tx.id}
              className="border-2 border-[#26273a] text-[13px] px-3 sm:w-[7rem] md:w-[7rem] rounded-full py-2 text-center shadow-custom text-gray-500"
            >
              {tx.date}
            </li>
          ))}
        </ul>

        {/* Debit Transactions Summary */}
        <span className="text-gray-500">
          Total Debits: {filteredDebitTransactions.length}
        </span>
        <ul className="flex flex-wrap gap-2 max-h-[30rem] overflow-y-auto">
          {filteredDebitTransactions.map((tx) => (
            <li
              key={tx.id}
              className="border-2 border-red-400 text-[13px] px-3 sm:w-[7rem] md:w-[7rem] rounded-full py-2 text-center shadow-custom text-gray-500"
            >
              {tx.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VirtualATMCardChart;
