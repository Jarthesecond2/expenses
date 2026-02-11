import './App.css'
import { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/Expenses/ExpensesFilter";

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
  const [expenses, setExpenses] = useState(() => {
    const expensesFromLS = JSON.parse(localStorage.getItem('expenses'));
    return expensesFromLS || [];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpenseHandler = (expense) => {
     setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
     });
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} data={expense} />
      ))}
    </div>
  );
};

export default App;
