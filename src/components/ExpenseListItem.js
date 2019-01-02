import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

//import {connect} from 'react-redux';
//import {removeExpense} from '../actions/expenses.js';

const ExpenseListItem  = ({dispatch,id,description,amount,createdAt,note}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>{numeral(amount /100).format('$0,0.00')} - {moment(createdAt).format('MMMM Do, YYYY')} - {note}</p> 
    </div>
);

 export default ExpenseListItem;
//export default  connect()(ExpenseListItem);
/* <button onClick={()=> {
    dispatch(removeExpense({id}))
    }} 
>Remove</button>
*/