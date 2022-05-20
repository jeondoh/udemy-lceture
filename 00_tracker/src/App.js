import NewExpense from "./components/NewExpense";
import ExpenseList from "./components/ExpenseList";
import { expenses } from "./components/expenseData";

function App() {
  const expensesData = expenses;

  const addExpenseHandler = (expensesData) => {
    console.log("In APP > ExpenseList");
    console.log(expensesData);
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList />
    </div>
  );
}

export default App;
