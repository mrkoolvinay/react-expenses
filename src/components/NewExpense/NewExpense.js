import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isNewForm, setIsNewForm] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    toggleIsNewForm();
  };

  let newExpenseContent = "";

  const toggleIsNewForm = () => setIsNewForm((prevIsNewForm) => !prevIsNewForm);

  if (isNewForm) {
    newExpenseContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseHandler}
        onCancel={toggleIsNewForm}
      />
    );
  } else {
    newExpenseContent = (
      <div className="new-expense__actions">
        <button onClick={toggleIsNewForm}>Add New Expense</button>
      </div>
    );
  }
  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
