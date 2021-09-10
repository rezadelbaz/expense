import { useState } from "react/cjs/react.development";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({ income, expence, addTransAction }) => {
  const [isShow, setIsShow] = useState(false);
  console.log(isShow);
  return (
    <>
      <div className="topSection">
        <p>Balance : {income - expence}</p>
        <button onClick={() => setIsShow((prevstate) => !prevstate)}>
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TransActionForm addTransAction={addTransAction} />}
      <div className="resultSection">
        <div>Expence {expence}</div>
        <div>Income: {income}</div>
      </div>
    </>
  );
};

export default OverViewComponent;
