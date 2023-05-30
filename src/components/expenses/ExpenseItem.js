import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (data) => {

    const [name, setName] = useState(data.name);

    const clickHandler = () => {
        setName('Updated!');
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={data.date}/>
            <div className="expense-item__description">
                <h2>{name}</h2>
                <div className="expense-item__price">{data.price}</div>
            </div>
            <button onClick={clickHandler}>Update Item</button>
        </Card>
    );
}

export default ExpenseItem;