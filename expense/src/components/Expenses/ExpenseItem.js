import './ExpenseItem.css'
import Card from '../UI/Card';
import React,{useState} from 'react'

import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) => {
    const [title,setTitle] = useState(props.title)
    const [amount,ChangeAmount] = useState(props.amount)
    // let title  = props.title;
    const clickHandler = () =>{
    // title='Updated'
    setTitle('Updated')

    }
    const deleteE = (e)=>{


    }

    const Change = () =>{
        ChangeAmount('100')
    }
// document.getElementById('root').addEventListener()
    // const expenseDate  = new Date(2021,2,28)
    // const expenseTitle = 'Car Insurance'
    // const expenseAmount = 296
    // const LocationOfExpenditure="New-Delhi"
    
    return (<Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description"><h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={Change}>Change</button>
        <div className="expense-item__location">{props.LocationOfExpenditure}</div></div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteE}>Delete</button>
    </Card>
    );
}

export default ExpenseItem;