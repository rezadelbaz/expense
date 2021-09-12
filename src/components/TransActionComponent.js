import { useEffect, useState } from "react";

const TransActionComponent = ({ transaction }) => {
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

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
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
              <span>${t.amount}</span>
            </div>
          ))
        : "item not match!"}
    </section>
  );
};

export default TransActionComponent;
