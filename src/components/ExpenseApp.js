import { useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";

const ExpensApp = () => {
  const [expence, setExpence] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);
  return (
    <section className="contianer">
      <OverViewComponent income={income} expence={expence} />
      <TransActionComponent transaction={transaction} />
    </section>
  );
};

export default ExpensApp;
