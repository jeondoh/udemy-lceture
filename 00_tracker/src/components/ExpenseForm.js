import "../style/expenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  // const [title, setTitle] = useState('');
  // const [amount, setAmount] = useState('');
  // const [dateText, setDateText] = useState('');
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    dateText: "",
  });

  const titleChangeHandler = (e) => {
    // setTitle(e.target.value);
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const amountChangeHandler = (e) => {
    // setAmount(e.target.value);
    setUserInput((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    // setDateText(e.target.value);
    setUserInput((prevState) => {
      return { ...prevState, dateText: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      ...userInput,
      dateText: new Date(userInput.dateText),
    };

    props.onSaveExpenseData(expenseData);
    setUserInput({ title: "", amount: "", dateText: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={userInput.dateText}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
