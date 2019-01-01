import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// add expense, remove expense, edit expense
// set text filter, sort by date, sort by amont, set start and end date
const addExpense = ({description='',note= '',amount= 0,createdAt= 0}) = () => ({
  type:'ADD_EXPENSE',
  expeses:{
        id: uuid(),
        description,
        note,
        amount,
        createdAt
  }
});
const removeExpense = ({id}) = () => ({
    type:'REMOVE_EXPENSE',
    id   
});
const editExpense = (id,updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates  
});


// Expenses reducer
const expenseReducerDefaultState = [];
const expensesReducer = (state=expenseReducerDefaultState,action) => {
    switch (action.type){
    case 'ADD-EXPENSE':
        return [...state,action.expense];
    case 'REMOVE_EXPENSE':
        return state.filter(({id}) => id !== action.id);
    case 'EDIT-EXPENSE':
        return state.map((expense) => {
           if (expense.id === action.id) {
            return { ...expense,
               ...action.updates 
            };
           } else {
               return expense;
           }   
        })    
    default: 
        return state;   
    }
};

/*-----------------------------------------------------------------------------*/

const setTextFilter = (text='') => ({
    type:'SET_TEXT_FILTER',
    text
});
const sortByDate = () => ({
    type:'SORT_BY_DATE'
});
const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT'
});
const setStartDate = (startDate) => ({
    type:'SET_START_DATE',
    startDate
});
const setEndDate = (endDate) => ({
    type:'SET_END_DATE',
    endDate
});

// Filters reducer
const filtersReducerDefaultState = {text:'',sortBy:'date',startDate:undefined,endDate:undefined};
const filtersReducer = (state=filtersReducerDefaultState,action) => {
    switch (action.type){
    case 'SET_TEXT-FILTER':
        return {...state,text:action.text};  
    case 'SORT_BY_DATE':
        return {...state,sortBy: 'date'};  
    case 'SORT_BY_AMOUNT':
        return {...state,sortBy: 'amount'};  
    case 'SET_START_DATE':
        return {...state,startDate: action.startDate};  
    case 'SET_END_DATE':
        return {...state,endDate: action.ednDate};  
    default: 
        return state;   
    }
};

/*-----------------------------------------------------------------------------*/
// Store creation
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
);

// set up objects and arrays used in store
const demoState = {
    expenses:[{
        id:'x',
        description:'',
        note:'',
        amount:0,
        createdAt:0
    }],
   
   filters:{
       text:'rent',
       sortBy: 'amount',// date or amount
       startDate: undefined,
       endDate: undefined
   }
  
  
  };
/*-----------------------------------------------------------------------------*/
// get visible expenses
const getVisibleExpenses = (expenses,{text,sortBy, startDate,endDate}) => {

    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = expense.description.toLowerCase.includes(text.toLowerCase);

        return startDateMatch && endDateMatch && textMatch;
    }).sort ((a,b) => {
      if (sortBy === 'date'){
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1; 
      }
    });
     
    
}
/*-----------------------------------------------------------------------------*/
// listerners 
store.subscribe (() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpense(state.expenses,state.filters);
    console.log(store.getState(),visibleExpenses)
});

/*-----------------------------------------------------------------------------*/
// make changes to the store
const expenseOne = store.dispatch(addExpense({description:'Rent',amount:100}));
const expeneTwo = store.dispatch(addExpense({description:'Coffee',amount:300}));
store.dispatch(removeExpense({id:expenseOne.expense.id}));
store.dispath(editExpense(expenseTwo,expense.id,{amount:500}));

store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispath(setStartDate(125));
store.dispath(setStartDate());
store.dispath(setEndDate(1250));


// spread operator for objects
const user = {
    name: 'Jen',
    age: 24

}

console.log({...user,location:Philadelphia, age:27}) // this will override age and add location
// not it does not change the original array