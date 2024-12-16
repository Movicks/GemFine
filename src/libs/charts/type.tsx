export interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string;
  status: "success" | "failed";
  type: "credit" | "debit";
}

export interface MonthlyTransaction {
  month: string;
  transactions: Transaction[];
}

export interface YearlyTransactionData {
  year: number;
  monthly: MonthlyTransaction[];
}

export interface ChartData {
  label: string;
  cost: number;
  income: number;
}