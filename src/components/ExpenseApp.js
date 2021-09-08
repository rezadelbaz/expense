import { useState } from "react";
import TransActionComponent from "./TransActionComponent";

const ExpensApp = () => {
  const [expence, setExpence] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);
  return (
    <section className="contianer">
      <div className="topSection">
        <p>Balance : {income - expence}</p>
        <button>Add</button>
      </div>
      <div className="resultSection">
        <div>Expence {expence}</div>
        <div>Income: {income}</div>
      </div>
      <TransActionComponent transaction={transaction} />
    </section>
  );
};

export default ExpensApp;
