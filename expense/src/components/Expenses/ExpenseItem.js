import './ExpenseItem.css'
import Card from '../UI/Card';


import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) => {
    const clickHandler = () =>{



    }
    const deleteE = (e)=>{


    }
// document.getElementById('root').addEventListener()
    // const expenseDate  = new Date(2021,2,28)
    // const expenseTitle = 'Car Insurance'
    // const expenseAmount = 296
    // const LocationOfExpenditure="New-Delhi"
    
    return (<Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description"><h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <div className="expense-item__location">{props.LocationOfExpenditure}</div></div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteE}>Delete</button>
    </Card>
    );
}

export default ExpenseItem;