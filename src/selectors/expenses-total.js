
const  selectExpensesTotal = (expenses) => {
    let total_amount = 0 ;
     if (expenses.length === 0){
         return 0
     }
     else {
      //  for (var i=0; i < expenses.length ; i++) {
      //      total_amount += expenses[i].amount
      //  } 
        /* alternative method for adding number) make object in array and then use reduce */
        total_amount =  expenses.map( (expense) => 
            expense.amount).reduce((sum,value) => sum + value,0);
       return total_amount; 
      }
}

 
export default selectExpensesTotal ;
