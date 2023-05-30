import { useState } from 'react'
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  let DUMMY_EXPENSES = [
    {
      id: 1,
      name: "Car Insurance",
      date: new Date(2020, 2, 27),
      price: "294.67",
    },
    {
      id: 2,
      name: "TV",
      date: new Date(2021, 4, 27),
      price: "394.67",
    },
    {
      id: 3,
      name: "SOfa",
      date: new Date(2020, 11, 27),
      price: "194.67",
    },
    {
      id: 4,
      name: "Dining Table",
      date: new Date(2021, 2, 27),
      price: "244.67",
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
