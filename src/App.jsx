import './App.css'
import { useState, useEffect } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses.jsx"
import ExpensesFilter from "./components/Expenses/ExpensesFilter.jsx"
<source />
const DYMMY_EXPENSES = [ 
  {
    id: 'id1',
    date: new Date(2023, 10, 12),
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
  const [isFetching, setIsFetching] = useState(false)
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true)
      const response = await fetch('http://localhost:5173/expenses')
      const responseData = await response.json()
      setExpenses(responseData.expenses)
      setIsFetching(false)
    }
    getExpenses()
    console.log(expenses)
}, [])

  const addExpenseHandler = (expense) => {
     setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
     });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} isLoading={isFetching}></Expenses>
    </div>
  );
};

export default App;
