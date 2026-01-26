import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2026");

    const filterYearHandler = (filteredYear) => {
        console.log('Year data in Expenses.js ' + filteredYear);
    }

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <p>Selected Year: {filteredYear}</p>
            {props.expenses.map((expense) => (
                <ExpenseItem expenseData={expense} key={expense.id} />
            ))}
        </Card>
    );
};

export default Expenses;