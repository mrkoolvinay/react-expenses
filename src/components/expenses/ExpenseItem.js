import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (data) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={data.date} />
        <div className="expense-item__description">
          <h2>{data.name}</h2>
          <div className="expense-item__price">${data.price}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
