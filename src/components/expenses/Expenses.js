import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const expenses = props.expenses;
  const [year, setYear] = useState("2021");
  const [filteredExpenses, setFilteredExpenses]
            = useState(expenses.filter(exp => exp.date.getFullYear() === 2021));
  const filterChangeHandler = (yearNew) => {
    setYear(yearNew);
    setFilteredExpenses(expenses
      .filter(exp=> exp.date.getFullYear() === Number(yearNew)));
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onFilterChange={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
