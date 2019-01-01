import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm.js';
import {addExpense}  from '../actions/expenses.js';


const AddExpensePage = (props) => {
   return (<div>
            <h1>Add Expense</h1>
            <ExpenseForm 
              onSubmit={(expense) =>{
                props.dispatch(addExpense(expense));
                //console.log('this is what it is',expense,props);
                props.history.push('/'); // swith to path / or can do /help etc
              }}/>
          </div>  );
}
 
export default connect()(AddExpensePage);