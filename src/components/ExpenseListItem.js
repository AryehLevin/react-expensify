import React from 'react';
import {Link} from 'react-router-dom';
//import {connect} from 'react-redux';
//import {removeExpense} from '../actions/expenses.js';

const ExpenseListItem  = ({dispatch,id,description,amount,createdAt,note}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt} - {note}</p> 
    </div>
);

 export default ExpenseListItem;
//export default  connect()(ExpenseListItem);
/* <button onClick={()=> {
    dispatch(removeExpense({id}))
    }} 
>Remove</button>
*/