import { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";

const TransActionComponent = ({
  transaction,
  setIncome,
  setExpense,
  setTransaction,
}) => {
  const [searchItem, setSearchItem] = useState("");
  const [filterdTnx, setFilterdTnx] = useState(transaction);

  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilterdTnx(transaction);
      return;
    }

    const filterd = transaction.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilterdTnx(filterd);
  };

  useEffect(() => {
    filterTransactions(searchItem);
  }, [transaction]);

  useEffect(() => {
    if (filterdTnx.length === 0) {
      setExpense(0);
      setIncome(0);
    }
    let exp = 0;
    let inc = 0;
    filterdTnx.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
      setExpense(exp);
      setIncome(inc);
    });
  }, [filterdTnx]);

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
  };

  const deleteHandaler = (id) => {
    const trans = transaction.filter((t) => t.id !== id);
    setTransaction(trans);
  };

  if (!transaction.length) return <h3>add some transaction</h3>;
  return (
    <section>
      <input
        type="text"
        value={searchItem}
        onChange={changeHandler}
        placeholder="search items"
        className="search"
      />
      {filterdTnx.length
        ? filterdTnx.map((t) => (
            <div
              key={t.id}
              className={`transaction ${t.type === "expense" && "expense"}`}
            >
              <span>{t.desc}</span>
              <span>
                ${t.amount}
                <button
                  className="trashbtn"
                  onClick={() => deleteHandaler(t.id)}
                >
                  <BiTrash />
                </button>
              </span>
            </div>
          ))
        : "item not match!"}
    </section>
  );
};

export default TransActionComponent;
