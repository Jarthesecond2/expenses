import './App.css'
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/Expenses/ExpensesFilter";
function App() {
  const expenses = [ 
  {
    date: new Date(2024, 10, 12),
    title: 'New book',
    price: 30.99
  },
  {
    date: new Date(2024, 10, 12),
    title: 'New jeans',
    price: 99.99
  }
];

const addExpenseHandler = (expense) => {
  console.log('In App.js');
  console.log(expense);
};

  return (

    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <ExpenseFilter />
      <ExpenseItem data={expenses[0]} />
      <ExpenseItem data={expenses[1]} />
    </div>
      
  );
}

export default App
