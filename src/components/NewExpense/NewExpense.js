import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  function showExpenseFormHandler() {
    setShowExpenseForm(true);
  }

  function hideExpenseFormHandler() {
    setShowExpenseForm(false);
  }

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    hideExpenseFormHandler();
  }

  return (
    <div className="new-expense">
      {!showExpenseForm && (
        <button onClick={showExpenseFormHandler}>Add New Expense</button>
      )}
      {showExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideExpenseFormHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
