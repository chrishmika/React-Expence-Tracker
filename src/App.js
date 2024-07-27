import "./App.css";
import Header from "./components/Header";
import { Balance } from "./components/Balance.js";
import { IncomeExpense } from "./components/IncomeExpense.js";
import { TransactionList } from "./components/TransactionList.js";
import { AddTransaction } from "./components/AddTransaction.js";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
