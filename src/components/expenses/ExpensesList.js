import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found!</h2>
  }

  return (
    <ul className="expenses-list">
        {
            props.items.map((exp) => (
                <ExpenseItem
                  key={exp.id}
                  name={exp.name}
                  date={exp.date}
                  price={exp.price}
                />))
        }
    </ul>
  );
};

export default ExpensesList;
