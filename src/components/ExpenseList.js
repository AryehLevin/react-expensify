import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem.js';
import getVisibleExpenses from '../selectors/expenses.js';

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        props.expenses.length === 0 ?
            (<p>No Expenses</p>) : (
        {props.expenses.map( (expense) =>{
            return <ExpenseListItem key={expense.id} {...expense} />
            })} )
    </div>
);

const mapStateToProps = (state) => {
    return {
       expenses: getVisibleExpenses(state.expenses,state.filters)
    }
}

// this export allows props from the store to be accessable in ExpenseList above
// ie whatever is specified in mapStateToProps - does not have to use store.subscribe etc
// this is done by react-redux
export default connect(mapStateToProps)(ExpenseList);
