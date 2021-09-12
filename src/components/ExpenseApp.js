import { useEffect, useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";

const ExpensApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const [transaction, setTransaction] = useState([]);

  const addTransAction = (formVlues) => {
    console.log(formVlues);
    const data = { ...formVlues, id: Date.now() };
    setTransaction([...transaction, data]);
  };

  // useEffect(() => {
  //   let exp = 0;
  //   let inc = 0;
  //   transaction.forEach((t) => {
  //     t.type === "expense"
  //       ? (exp = exp + parseFloat(t.amount))
  //       : (inc = inc + parseFloat(t.amount));
  //     setExpence(exp);
  //     setIncome(inc);
  //   });
  // }, [transaction]);

  return (
    <section className="contianer">
      <OverViewComponent
        income={income}
        expense={expense}
        addTransAction={addTransAction}
      />
      <TransActionComponent
        transaction={transaction}
        setTransaction={setTransaction}
        setIncome={setIncome}
        setExpense={setExpense}
      />
    </section>
  );
};

export default ExpensApp;
