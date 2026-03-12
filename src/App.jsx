import './App.css'
import { useState, useEffect } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses.jsx"
import ExpensesFilter from "./components/Expenses/ExpensesFilter.jsx"
import Error from "./components/UI/Error.jsx";
<source />

const App = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [expenses, setExpenses] = useState([])
  const [error, setError] = useState(null)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true)

      try {
        const response = await fetch('http://localhost:5173/expenses')

        if(!response.ok){
          throw new Error('Failed fetching data')          
        }

        const responseData = await response.json()

        setExpenses(responseData.expenses)

    } catch (error) {
        setError({
          title: 'An error occured!',
          message: 'Failed fetching expenses data, please try again later.'
        })
        setShowError(true)
      }
      setIsFetching(false)
    }
    getExpenses()
}, [])

  console.log(error)
  const errorHandler = () => {
    setError(null)
    setShowError(false)
  }

  const addExpenseHandler = (expense) => {
     setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
     });
  };

  return (
    <div className="App">
      { showError && (
        <Error title={error.title} message={error.message} onConfirm={errorHandler}/>)
      }
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} isLoading={isFetching}></Expenses>
    </div>
  );
};

export default App;
