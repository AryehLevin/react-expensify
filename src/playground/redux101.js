import React, { Component } from 'react';
import {createStore} from 'redux';

class ReduxTest extends Component {
    state = {  }
    render() {

     const add = (data) => {
           return data.a + data.b;
       }
     console.log(add({a:1,b:12}));
     // or descructuring
     const add = (a,b) => {
        return a + b;
    }
  console.log(add({a:1,b:12}));

// reducers
// 1. reducer is a pure fuction - ie determined by data in functions only - current state and action
// 2. state and action  should not be changed in the reducer directly 

    // create store with default and associated actions
       const countReducer = createStore((state = {count:0},action)=>{
        switch (action.type) {
            case 'INCREMENT' :
         // nor nwwsws        const incrementby = typeof action.incrementby === 'number'? action.incrementby : 1
                 return {
                    count: state.count + incrementby
                }; 
            case 'DECREMENT' :
            const decrementby = typeof action.decrementby === 'number'? action.decrementby : 1
            return {
                   count: state.count - decrementby
               }; 
            case 'SET' :
               return {
                  count: action.count
              };    
            case 'RESET' :
               return {
                  count: 0
              }; 
           default: {
                return state;
             }
        }
    });

    const store = createStore(countReducer);

  const incrementCount = ({incrementBy= 1}={}) => ({
        type: 'INCREMENT',
        incrementBy: incrementBy
  });
  const descrementCount = ({incrementBy= 1}={}) => ({
    type: 'INCREMENT',
    descrementBy: descrementBy
   });
   const reestCount = () => ({
       type: 'RESET'
   }),
   const setCount = ({SetValue = 0}={}) => ({
    type: 'SET',
  
   });
  
   store.dispatch(incrementCount({incrementBy:5}));
   store.dispatch(incrementCount());
   store.dispatch(resetCount());
   store.dispatch(setCount({count:-100}));
  
  

   
        // to watch for changes to the store - store.subscribe () 
        // to unsubscribe const unsubscribe = store.subscribe 
        // the call unsubscribe
        // get data from store - getstate store.getState();
        // add data to store = dispath with type
console.log();
        return ( <div>
                   
                 </div>
         );
    }
}
 
export default ReduxTest;

/*
instead of using store.dispatch({type:'INCREMENT'},incrementby:5) as could be typo's
use functions to do it store.dispatch(incrementCount({increment:5}))
   const incrementCount = (payload = {})=> ({
       type: 'INCREMENT',
       incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy: 1
   }) 
   // note if use const incrementCount = (payload)=> ({ etc
   and there is no paramter passed in it will generate an error
or desstructure (and set default to 1 if value not passed in )
onst incrementCount = ( {incrementBy = 1})= {}) => ({
 {store}
                    {store.dispatch({type:'INCREMENT'},incrementby:5)}
                    {store.dispatch({type:'INCREMENT'})}
                    {store.dispatch({type:'RESET'})}
                    {store.dispatch({type:'DECREMENT'},decrementby:10)}
                    {store.dispatch({type:'SET'},count:101)}
                    <h1>{store.getState()}</h1>
                    */

