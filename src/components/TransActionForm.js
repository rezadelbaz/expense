import { useState } from "react/cjs/react.development";

const TransActionForm = ({ addTransAction }) => {
  const [formValuse, setFormValues] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });
  const changeHandler = (e) => {
    setFormValues({ ...formValuse, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTransAction(formValuse);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValuse.desc}
      />
      <input
        type="number"
        name="amount"
        onChange={changeHandler}
        value={formValuse.amount}
      />
      <div>
        <input
          type="radio"
          value="expense"
          name="type"
          checked={formValuse.type === "expense"}
          onChange={changeHandler}
        />
        <label>Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          checked={formValuse.type === "income"}
          onChange={changeHandler}
        />
        <label>Income</label>
      </div>
      <button type="submit">add TransAction</button>
    </form>
  );
};

export default TransActionForm;
