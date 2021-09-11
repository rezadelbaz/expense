const TransActionComponent = ({ transaction }) => {
  return (
    <section>
      {transaction.map((t) => (
        <div
          key={t.id}
          className={`transaction ${t.type === "expense" && "expense"}`}
        >
          <span>{t.desc}</span>
          <span>${t.amount}</span>
        </div>
      ))}
    </section>
  );
};

export default TransActionComponent;
