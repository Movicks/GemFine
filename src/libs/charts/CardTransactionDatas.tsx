// TransactionData.ts (data file)
import { YearlyTransactionData } from './type';

export const transactionDatas: YearlyTransactionData[] = [
  {
    year: 2023,
    monthly: [
      {
        month: "Jan",
        transactions: [
          { id: 9457, description: "January Credit", amount: 1050.00, date: "2023-01-01", status: "success", type: "credit" },
          { id: 9459, description: "January Credit", amount: 1000.00, date: "2023-01-01", status: "success", type: "credit" },
          { id: 8532, description: "January Credit", amount: 0.00, date: "2023-01-01", status: "failed", type: "credit" },
          { id: 4931, description: "January Debit", amount: 3500.00, date: "2023-01-06", status: "success", type: "debit" },
          { id: 4932, description: "January Debit", amount: 3500.00, date: "2023-01-01", status: "success", type: "debit" },
          { id: 9074, description: "January Debit", amount: 250.00, date: "2023-01-01", status: "failed", type: "debit" }
        ]
      },
      {
        month: "Feb",
        transactions: [
          { id: 6741, description: "February Credit", amount: 17000.00, date: "2023-02-01", status: "success", type: "credit" },
          { id: 2045, description: "February Credit", amount: 550.00, date: "2023-02-01", status: "failed", type: "credit" },
          { id: 3198, description: "February Debit", amount: 5000.00, date: "2023-02-01", status: "success", type: "debit" },
          { id: 7745, description: "February Debit", amount: 0.00, date: "2023-02-01", status: "failed", type: "debit" }
        ]
      },
      {
        month: "Mar",
        transactions: [
          { id: 2048, description: "March Credit", amount: 750.00, date: "2023-03-01", status: "success", type: "credit" },
          { id: 3016, description: "March Credit", amount: 400.00, date: "2023-03-01", status: "failed", type: "credit" },
          { id: 1092, description: "March Debit", amount: 300.00, date: "2023-03-01", status: "success", type: "debit" },
          { id: 9325, description: "March Debit", amount: 150.00, date: "2023-03-01", status: "failed", type: "debit" }
        ]
      },
      {
        month: "April",
        transactions: [
          { id: 8369, description: "April Credit", amount: 1200.00, date: "2023-04-01", status: "success", type: "credit" },
          { id: 7483, description: "April Credit", amount: 100.00, date: "2023-04-01", status: "failed", type: "credit" },
          { id: 3200, description: "April Debit", amount: 600.00, date: "2023-04-01", status: "success", type: "debit" },
          { id: 8269, description: "April Debit", amount: 50.00, date: "2023-04-01", status: "failed", type: "debit" }
        ]
      },
      {
        month: "May",
        transactions: [
          { id: 6291, description: "May Credit", amount: 1350.00, date: "2023-05-01", status: "success", type: "credit" },
          { id: 9273, description: "May Credit", amount: 200.00, date: "2023-05-01", status: "failed", type: "credit" },
          { id: 4852, description: "May Debit", amount: 700.00, date: "2023-05-01", status: "success", type: "debit" },
          { id: 9924, description: "May Debit", amount: 100.00, date: "2023-05-01", status: "failed", type: "debit" }
        ]
      },
      {
        month: "Jun",
        transactions: [
          { id: 1284, description: "June Credit", amount: 1600.00, date: "2023-06-01", status: "success", type: "credit" },
          { id: 5934, description: "June Credit", amount: 150.00, date: "2023-06-01", status: "failed", type: "credit" },
          { id: 3095, description: "June Debit", amount: 800.00, date: "2023-06-01", status: "success", type: "debit" },
          { id: 5179, description: "June Debit", amount: 0.00, date: "2023-06-01", status: "failed", type: "debit" }
        ]
      },
      {
        month: "Jul",
        transactions: [
          { id: 6542, description: "July Credit", amount: 1800.00, date: "2023-07-01", status: "success", type: "credit" },
          { id: 7993, description: "July Credit", amount: 100.00, date: "2023-07-01", status: "failed", type: "credit" },
          { id: 2042, description: "July Debit", amount: 900.00, date: "2023-07-01", status: "success", type: "debit" },
          { id: 9321, description: "July Debit", amount: 50.00, date: "2023-07-01", status: "failed", type: "debit" }
        ]
      },
      {
        month: "Aug",
        transactions: [
          { id: 2839, description: "August Credit", amount: 2000.00, date: "2023-08-01", status: "success", type: "credit" },
          { id: 1298, description: "August Credit", amount: 0.00, date: "2023-08-01", status: "failed", type: "credit" },
          { id: 2834, description: "August Debit", amount: 1000.00, date: "2023-08-01", status: "success", type: "debit" },
          { id: 7402, description: "August Debit", amount: 200.00, date: "2023-08-01", status: "failed", type: "debit" }
        ]
      },
      {
        month: "Sep",
        transactions: [
          { id: 5376, description: "September Credit", amount: 1450.00, date: "2023-09-01", status: "success", type: "credit" },
          { id: 7280, description: "September Credit", amount: 300.00, date: "2023-09-01", status: "failed", type: "credit" },
          { id: 8364, description: "September Debit", amount: 650.00, date: "2023-09-01", status: "success", type: "debit" },
          { id: 1845, description: "September Debit", amount: 100.00, date: "2023-09-01", status: "failed", type: "debit" }
        ]
      },
      {
        month: "Oct",
        transactions: [
          { id: 2037, description: "October Credit", amount: 1700.00, date: "2023-10-01", status: "success", type: "credit" },
          { id: 6095, description: "October Credit", amount: 250.00, date: "2023-10-01", status: "failed", type: "credit" },
          { id: 3495, description: "October Debit", amount: 700.00, date: "2023-10-01", status: "success", type: "debit" },
          { id: 1739, description: "October Debit", amount: 50.00, date: "2023-10-01", status: "failed", type: "debit" }
        ]
      },
      {
        month: "Nov",
        transactions: [
          { id: 5073, description: "November Credit", amount: 2200.00, date: "2023-11-01", status: "success", type: "credit" },
          { id: 2837, description: "November Credit", amount: 0.00, date: "2023-11-01", status: "failed", type: "credit" },
          { id: 7954, description: "November Debit", amount: 900.00, date: "2023-11-01", status: "success", type: "debit" },
          { id: 6358, description: "November Debit", amount: 150.00, date: "2023-11-01", status: "failed", type: "debit" }
        ]
      },
      {
        month: "Dec",
        transactions: [
          { id: 8459, description: "December Credit", amount: 1900.00, date: "2023-12-01", status: "success", type: "credit" },
          { id: 2154, description: "December Credit", amount: 500.00, date: "2023-12-01", status: "failed", type: "credit" },
          { id: 4831, description: "December Debit", amount: 850.00, date: "2023-12-01", status: "success", type: "debit" },
          { id: 9605, description: "December Debit", amount: 200.00, date: "2023-12-01", status: "failed", type: "debit" }
        ]
      }
    ]
  },
];
