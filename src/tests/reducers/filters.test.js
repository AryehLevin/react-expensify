import filtersReducer from '../../reducers/filters.js';
import moment from 'moment';

test('should setup default filter values',() =>{
    const action = {type:'@@INIT'};
    const state = filtersReducer(undefined,action);
     expect(state).toEqual({ 
        text: '',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
        }) 
});

test('should set sort by to amount',() =>{
    const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
     expect(state.sortBy).toBe('amount');
});

test('should set sort by to date',() =>{
    const currentState = {text:"",startDate:undefined,endDate:undefined}
    const action= {type:"SORT_BY_DATE"};
    const state = filtersReducer(currentState,action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter',() =>{
    const text = 'test my filter';
    const action = {type:'SET_TEXT_FILTER',text:text};
    const state = filtersReducer(undefined,action);
     expect(state.text).toBe(text);
});

test('should set start date filter',() =>{
    const startDate = moment()
    const action = {type:'SET_START_DATE',startDate};
    const state = filtersReducer(undefined,action);
     expect(state.startDate).toEqual(startDate);
});

test('should set end date filter',() =>{
    const endDate = moment()
    const action = {type:'SET_END_DATE',endDate};
    const state = filtersReducer(undefined,action);
     expect(state.endDate).toEqual(endDate);
});
