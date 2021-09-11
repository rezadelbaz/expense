import { useState } from "react/cjs/react.development";

const TransActionForm = ({ addTransAction, setIsShow }) => {
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
    setIsShow(false);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValuse.desc}
        placeholder="description"
      />
      <input
        type="number"
        name="amount"
        placeholder="amount"
        onChange={changeHandler}
        value={formValuse.amount}
      />
      <div className="radioBox">
        <input
          type="radio"
          value="expense"
          name="type"
          checked={formValuse.type === "expense"}
          onChange={changeHandler}
          id="expense"
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          checked={formValuse.type === "income"}
          onChange={changeHandler}
          id="income"
        />
        <label htmlFor="income">Income</label>
      </div>
      <button type="submit" className="btn primary">
        add TransAction
      </button>
    </form>
  );
};

export default TransActionForm;
