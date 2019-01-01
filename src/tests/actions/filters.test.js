import {setStartDate, setEndDate, setTextFilter,sortByAmount, sortByDate} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object',() =>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({ 
        type: "SET_START_DATE",
        startDate:moment(0)
        })
});
test('should generate set end date action object',() =>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({ 
        type: "SET_END_DATE",
        endDate:moment(0)
        }) 
});
test('should generate set sort amount',() =>{
    const action = sortByAmount();
    expect(action).toEqual({ 
        type: "SORT_BY_AMOUNT"
        }) 
});

test('should generate set sort date',() =>{
    expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" }) 
});


test('should generate set filter text  with text value',() =>{
    const testTextFilter = 'bill'
    const action = setTextFilter(testTextFilter);
    expect(action).toEqual({ 
        type: "SET_TEXT_FILTER",
        text:testTextFilter
        }) 
});

test('should generate set filter text with no value',() =>{
    const action = setTextFilter();
    expect(action).toEqual({ 
        type: "SET_TEXT_FILTER",
        text:''
        }) 
});
