import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { format, isAfter, isBefore, parseISO } from "date-fns";
// import { CardTransactionsData } from "./CardTransactionsData";
import { transactionDatas } from "../../libs/charts/CardTransactionDatas";

type Props = {};

export default function CardHistory({}: Props) {
  const [showDateSelector, setShowDateSelector] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const itemsPerPage = 5; // Number of items per page

  const toggleDateSelector = () => {
    setShowDateSelector(!showDateSelector);
  };

  // Flatten transactions from YearlyTransactionData and filter by date range
  const filteredTransactions = transactionDatas
    .flatMap((yearData) => yearData.monthly) // Flatten yearly data to monthly
    .flatMap((monthData) => monthData.transactions) // Flatten monthly data to transactions
    .filter((transaction) => {
      const transactionDate = parseISO(transaction.date); // Parsing the transaction date
      const start = startDate || new Date("1970-01-01");
      const end = endDate || new Date();
      return (
        (!startDate || isAfter(transactionDate, start) || transactionDate === start) &&
        (!endDate || isBefore(transactionDate, end) || transactionDate === end)
      );
    });

  // Handle Date Change
  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  // Pagination logic: Slice the filtered transactions array
  const indexOfLastTransaction = currentPage * itemsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - itemsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="relative w-full Transactions-list lg:h-auto p-3 rounded-lg bg-white shadow-custom">
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-gray-600">Card transactions</span>
        <button
          onClick={toggleDateSelector}
          className="bg-redGradient text-white px-2 py-1 rounded flex items-center gap-2"
        >
          <span className="text-lg">Filter</span>
          {showDateSelector ? <FaAngleUp className="text-2xl" /> : <FaAngleDown className="text-2xl" />}
        </button>
      </div>

      {/* Check if the transactions list is empty */}
      {currentTransactions.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No transactions available</p>
      ) : (
        <ul className="Transactions-list-container mt-4 pb-4">
          {currentTransactions.map((transaction) => (
            <li key={transaction.id} className="flex justify-between items-center py-2 border-b border-red-500">
              <div className="flex flex-col w-[10.5rem]">
                <span className="font-semibold text-gray-600">{transaction.description}</span>
                <span className="text-gray-400">{format(parseISO(transaction.date), "dd-MM-yyyy")}</span>
              </div>
              <span
                className={`w-full max-w-[20%] font-semibold ${
                  transaction.type === "debit" ? "text-red-400" : "text-gray-600"
                }`}
              >
                {transaction.type === "debit" ? `-$${transaction.amount}` : `+$${transaction.amount}`}
              </span>
              <span
                className={`w-[5rem] text-end ${
                  transaction.status === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                {transaction.status}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Pagination controls */}
      {filteredTransactions.length > itemsPerPage && (
        <div className="flex justify-center mt-4 gap-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-redGradient text-white px-4 py-1 rounded w-[6rem]"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage * itemsPerPage >= filteredTransactions.length}
            className="bg-redGradient text-white px-4 py-1 rounded w-[6rem]"
          >
            Next
          </button>
        </div>
      )}

      {showDateSelector && (
        <>
          {/* Background Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleDateSelector}></div>

          {/* Date Selector Modal */}
          <div className="fixed inset-0 top-[-7.5rem] flex items-center justify-center z-20">
            <div className="w-80 p-6 bg-white shadow-custom rounded-lg">
              <p className="mb-2">Select a date:</p>

              {/* React Datepicker */}
              <div className="flex items-center space-x-3">
                <DatePicker
                  selected={startDate}
                  onChange={handleStartDateChange}
                  placeholderText={startDate ? format(startDate, "dd-MM-yyyy") : "Start date"}
                  className="border-2 border-red-500 p-1 rounded w-full focus:outline-none outline-none focus:border-red-500 hover:border-2 bg-transparent active:outline-none"
                  dateFormat="dd-MM-yyyy"
                />
                <span className="text-4xl text-gray-400">-</span>
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  placeholderText={endDate ? format(endDate, "dd-MM-yyyy") : "End date"}
                  className="border-2 border-red-500 p-1 rounded w-full focus:outline-none outline-none focus:border-red-500 hover:border-2 bg-transparent"
                  dateFormat="dd-MM-yyyy"
                />
              </div>

              <div className="flex space-x-2 mt-6">
                <button
                  onClick={toggleDateSelector}
                  className="bg-gray-700 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={toggleDateSelector}
                  className="bg-redGradient text-white px-3 py-1 rounded"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
