
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
    const expenses = props.expenses;
  return (
    <Card className="expenses">
      <p>Expenses</p>
      <ExpenseItem
        name={expenses[0].name}
        date={expenses[0].date}
        price={expenses[0].price}
      ></ExpenseItem>
      <ExpenseItem
        name={expenses[1].name}
        date={expenses[1].date}
        price={expenses[1].price}
      ></ExpenseItem>
      <ExpenseItem
        name={expenses[2].name}
        date={expenses[2].date}
        price={expenses[2].price}
      ></ExpenseItem>
      <ExpenseItem
        name={expenses[3].name}
        date={expenses[3].date}
        price={expenses[3].price}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
