import "./App.css";
import ExpensApp from "./components/ExpenseApp";

const App = () => {
  return (
    <div className="App">
      <header>
        <h2>Expence Tracker</h2>
      </header>
      <ExpensApp />
    </div>
  );
};

export default App;
