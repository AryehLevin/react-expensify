
// Expenses reducer
//const expenseReducerDefaultState = [{id:'',description:'',note:'',amount:0,createdAt:0}];
//const expensesReducer = (state=[expenseReducerDefaultState],action) => {
const expensesReducer = (state=[],action) => {
    switch (action.type){
    case 'ADD_EXPENSE':
        return [...state,action.expense];
    case 'REMOVE_EXPENSE':
        return state.filter(({id}) => id !== action.id);
    case 'EDIT_EXPENSE':
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

export default expensesReducer;