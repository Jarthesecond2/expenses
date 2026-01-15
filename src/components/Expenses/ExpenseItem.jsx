import ExpenseDate from './ExpenseDate.jsx'
import './ExpenseItem.css'
import Card from '../UI/Card.jsx'
const ExpenseItem = (props) => {
    const day = props.data.date.toLocaleString('en-US', {day: '2-digit'});
    const month = props.data.date.toLocaleString('en-US', {month: 'long'});
    const year = props.data.date.getFullYear()

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.data.date} />
            <div className='expense-item__description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item__price'>{props.data.price}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem