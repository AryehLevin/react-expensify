import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm.js'; 
import expenses from '../fixtures/expenses.js';
import '../setupTests.js';


test ('should render Expenseform correct',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect (wrapper).toMatchSnapshot();
  });


  test ('should render Expenseform with expense data',()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect (wrapper).toMatchSnapshot();
  });