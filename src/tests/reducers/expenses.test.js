import expensesReducer from '../../reducers/expenses.js';
import moment from 'moment';
import expenses from '../fixtures/expenses.js';


test('should set default state',() =>{
    const state = expensesReducer(undefined,{type:'@@INIT'});
     expect(state).toEqual([]); 
});

test('should remove expense by id ',() =>{
    const action = {type:'REMOVE_EXPENSE',id:expenses[1].id};
    const state = expensesReducer(expenses,action);
     expect(state).toEqual([expenses[0],expenses[2]]) 
});

test('should note remove expense if id not found ',() =>{
    const action = {type:'REMOVE_EXPENSE',id:'41'};
    const state = expensesReducer(expenses,action);
     expect(state).toEqual(expenses) 
});

test('add an expense ',() =>{
    const newExpense = {id:'4',description:'Laptop',note:'',amount:29500,createdAt:20000}
    const action = {type:'ADD_EXPENSE',expense:newExpense};
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,newExpense]);
});

test('edit expense ',() =>{
    const amount = 122000;
    const action = {type:'EDIT_EXPENSE',id:expenses[1].id,updates:{amount}};
    const state = expensesReducer(expenses,action);
     expect(state[1].amount).toBe(amount) 
});

test('should not edit expense if id not found ',() =>{
    const action = {type:'EDIT_EXPENSE',id:41,updates:{note:"test note"}};
    const state = expensesReducer(expenses,action);
     expect(state[1].note).toEqual("") 
});