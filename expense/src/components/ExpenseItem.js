import './ExpenseItem.css'
function ExpenseItem(props){
    // const expenseDate  = new Date(2021,2,28)
    // const expenseTitle = 'Car Insurance'
    // const expenseAmount = 296
    // const LocationOfExpenditure="New-Delhi"
    return (<div className="expense-item">
        <div>{props.date.toISOString()}</div>
        <div className="expense-item__description"><h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <div>{props.LocationOfExpenditure}</div></div>
    </div>
    );
}

export default ExpenseItem;