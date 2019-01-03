import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import ExpenseListItem from './ExpenseListItem.js';
import getVisibleExpenses from '../selectors/expenses.js';
import selectExpensesTotal from '../selectors/expenses-total.js';

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        <h3>Total Expenses: {numeral(selectExpensesTotal(props.expenses) /100).format('$0,0.00') }</h3>
        <h3>Number of Expenses: {props.expenses.length}</h3>
        {props.expenses.map( (expense) =>{
            return <ExpenseListItem key={expense.id} {...expense} />
            })} 
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
