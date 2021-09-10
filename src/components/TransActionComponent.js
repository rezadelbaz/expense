const TransActionComponent = ({ transaction }) => {
  return (
    <section>
      {transaction.map((t) => (
        <div key={t.id}>{t.desc}</div>
      ))}
    </section>
  );
};

export default TransActionComponent;
