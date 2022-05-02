import ExpenseItem from "./ExpenseItem";
import "../style/expenses.css";

function ExpenseList() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 54.12,
      date: new Date(2020, 1, 13),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 632.3,
      date: new Date(2021, 5, 25),
    },
    { id: "e3", title: "New TV", amount: 23.12, date: new Date(2022, 2, 2) },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 512.2,
      date: new Date(2022, 3, 9),
    },
  ];
  return (
    <div className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        key={expenses[0].id}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        key={expenses[1].id}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        key={expenses[2].id}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        key={expenses[3].id}
      />
    </div>
  );
}

export default ExpenseList;
