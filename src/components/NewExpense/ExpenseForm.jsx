import { useState, useRef } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const titleInputRef = useRef();
    const amountInputRef = useRef();
    const dateInputRef = useRef();

    const submitHandler = (event) => {
        const enteredTitle = titleInputRef.current.value;
        const enteredPrice = amountInputRef.current.value;
        const enteredDate = dateInputRef.current.value;

        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredPrice,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        props.onCancel();
        titleInputRef.current.value = '';
        amountInputRef.current.value = '';
        dateInputRef.current.value = '';
    };

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        id="title"
                        ref={titleInputRef}
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        id="amount"
                        ref={amountInputRef}
                        min="0.01"
                        step="0.01"
                        onChange={priceChangeHandler}
                        value={enteredPrice}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        id="date"
                        ref={dateInputRef}
                        min="2024-11-12"
                        max="2026-01-31"
                        onChange={dateChangeHandler}
                        value={enteredDate}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;