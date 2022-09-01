import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "../style/expenses.css";
import { expenses } from "./expenseData";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
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
    </Card>
  );
}

export default ExpenseList;
