export interface Transaction {
  id: number;
  description: string;
  amount: string;
  date: string;
  status: string;
  type: "debit" | "credit"; // Use exact string literals
}
