import moment from 'moment';

export default (expenses,{text,sortBy, startDate,endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day'): true ;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,'day'): true ;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date'){
          return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
          return a.amount < b.amount ? 1 : -1; 
        }
      });     
}



// get visible expenses
/*
const expenses_sorted = expenses_filtered.sort( (a,b) => {
  if (sort === 'date') {
      return (a.recorded_on < b.recorded_on) ? 1 : -1; //desc
  }
  else if (sort === 'amount') {
      return (a.amount < b.amount) ? 1 : -1;  //desc
  }
  else
      return 0;
  
}) 
*/
/*
const getVisibleExpenses = (expenses,{text,sortBy, startDate,endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    })   
}

export default getVisibleExpenses;
*/
/*
.sort((a,b) => {
      if (sortBy === 'date'){
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1; 
      }
    });  
    
    
 
export const getVisibleExpenses = (expenses,filter) => {

  const {text,sort,begin_date,end_date,amount} = filter;
  
  // filter 
  const expenses_filtered = expenses.filter( (expense) => {       
      const startDateMatch = typeof begin_date !=='number' || expense.recorded_on >= begin_date;
      const endDateMatch = typeof end_date !=='number' || expense.recorded_on <= end_date;
      const textMatch = !text || expense.description.toLowerCase().includes(text.toLowerCase());
      const amountMatch = typeof amount !=='number' || expense.amount >= amount;
      return startDateMatch && endDateMatch && textMatch && amountMatch;
  })
  
  // sort 
  const expenses_sorted = expenses_filtered.sort( (a,b) => {
      if (sort === 'date') {
          return (a.recorded_on < b.recorded_on) ? 1 : -1; //desc
      }
      else if (sort === 'amount') {
          return (a.amount < b.amount) ? 1 : -1;  //desc
      }
      else
          return 0;
      
  }) 
  return { expenses: expenses_sorted }
}

    */