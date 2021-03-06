import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList'; 
import expenses from '../fixtures/expenses.js';
import '../setupTests.js';

test ('should render ExpenseList with expenses',()=>{
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect (wrapper).toMatchSnapshot();
});

test ('should render ExpenseList with empty expense list',()=>{
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect (wrapper).toMatchSnapshot();
  });