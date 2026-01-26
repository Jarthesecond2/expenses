import './App.css'
import { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/Expenses/ExpensesFilter";

const DYMMY_EXPENSES = [ 
  {
    id:'id1',
    date: new Date(2024, 10, 12),
    title: 'New book',
    price: 30.99
  },
  {
    id: 'id2',
    date: new Date(2024, 10, 12),
    title: 'New jeans',
    price: 99.99
  },
  {
    id: 'id3',
    date: new Date(2024, 0, 25),
    title: 'New bag',
    price: 139.99
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(DYMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
     setExpenses((prevExpenses) => {
      return [expense, ...previousExpenses];
     })
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <ExpenseFilter />
      <ExpenseItem data={DYMMY_EXPENSES[0]} />
      <ExpenseItem data={DYMMY_EXPENSES[1]} />
      <ExpenseItem data={DYMMY_EXPENSES[2]} />
    </div> 
  );
}
export default App
