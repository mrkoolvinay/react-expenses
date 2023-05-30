import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {

    // Using Multiple states
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] =  useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    // Using single single state object
    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: ''
    // });

    // const nameChangeHandler = (event) => {
    //     // const newUserInput = {
    //     //     ...userInput,
    //     //     name: event.target.value
    //     // }
    //     // setUserInput(newUserInput);
    //     setUserInput((prevState) => {
    //         return {...prevState, name: event.target.value}
    //     })
    //     console.log(userInput);
    // }

    // const amountChangeHandler = (event) => {
    //     // const newUserInput = {
    //     //     ...userInput,
    //     //     amount: event.target.value
    //     // }
    //     // setUserInput(newUserInput);
    //     setUserInput((prevState) => {
    //         return {...prevState, amount: event.target.value}
    //     })
    //     console.log(userInput);
    // }

    // const dateChangeHandler = (event) => {
    //     // const newUserInput = {
    //     //     ...userInput,
    //     //     date: event.target.value
    //     // }
    //     // setUserInput(newUserInput);
    //     setUserInput((prevState) => {
    //         return {...prevState, date: event.target.value}
    //     })
    //     console.log(userInput);
    // }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      name: name,
      price: amount,
      date: new Date(date)
    };

    props.onSaveExpenseData(expenseData);
    setName('');
    setAmount('');
    setDate('');
    
  };



  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Name</label>
          <input type="text" value={name} onChange={nameChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} min="2019-01-01" step="2023-12-01" onChange={dateChangeHandler}/>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>cancel</button>
            <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
