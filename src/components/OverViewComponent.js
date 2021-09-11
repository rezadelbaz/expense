import { useState } from "react/cjs/react.development";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({ income, expence, addTransAction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="topSection">
        <p>Balance : {income - expence}</p>
        <button
          onClick={() => setIsShow((prevstate) => !prevstate)}
          className={`btn ${isShow && "cancel"}`}
        >
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && (
        <TransActionForm
          addTransAction={addTransAction}
          setIsShow={setIsShow}
        />
      )}
      <div className="resultSection">
        <div className="expenseBox">
          Expence <span style={{ color: "red" }}>{expence}$</span>
        </div>
        <div className="expenseBox">
          Income: <span>{income}$</span>
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;
