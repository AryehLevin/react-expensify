import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import './App.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import configureStore from './store/configureStore.js';
import ExpenseDashboardPage from './components/ExpenseDashboardPage.js';
import AddExpensedPage from './components/AddExpensePage.js';
import EditExpensePage from './components/EditExpensePage.js';
import HelpPage from './components/HelpPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import Header from './components/Header.js';

import {addExpense} from './actions/expenses.js'
import {setTextFilter} from './actions/filters.js'



class App extends Component {
   render() {
    //const title = 'Expensify Application';
  
    const store = configureStore();
    
    store.dispatch(addExpense({description:'rent',note:'test',amount: 1095, createdAt:109500}));
    store.dispatch(addExpense({description:'water bill',note:'test',amount: 4500}));
    store.dispatch(addExpense({description:'gas bill',amount: 200}));
    store.dispatch(addExpense({description:'Electricity',note:'test',amount: 4500}));
    store.dispatch(addExpense({description:'Computer',note:'see if git changes',amount: 220000}));
    store.dispatch(setTextFilter('b'));
    //const state = store.getState();
    console.log('hello 2',store.getState());

  const AppRouter = () => (
      <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true}/>
          <Route path="/create" component={AddExpensedPage} />
          <Route path="/edit/:id" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      </BrowserRouter>
    ) 
  
    return (
      <div className="App">
        <Provider store={store}>
           <AppRouter/>
        </Provider>
      </div>
    );
  }
}

export default App;
