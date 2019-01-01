import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
//import 'react-dates/lib/css/_datepicker.css'; -- moved to app.js
//import uuid from 'uuid';

// use moment to get value now could use const date = new GetDate()
//const now = moment();
//console.log(now.format('MMM Do YYYY'))

class ExpenseForm extends Component {
    constructor(props){
      super(props);
        this.state = { 
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment() ,
            calendarFocused:false,
            error:'' 
        }
/*
      this.setState(()=>({description: props.expense ? props.expense.description : ''}))
      this.setState(()=>({note: props.expense ? props.expense.note : ''}))
      this.setState(()=>({amount: props.expense ? props.expense.amount : ''}))
      this.setState(()=>({createdAt: props.expense ? props.expense.createdAt : moment() }))
     */
    } 

    onDescriptionChanage = (e) => {
        const description = e.target.value;
       // console.log('form desc',description)
        this.setState(()=>({description}))
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(()=>({note:note}))
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
       // console.log('form amount',amount) /^\d{1,}(\.\d{0,2})?$/
       if (amount.match(/^\d*(\.\d{0,2})?$/)) {
           this.setState(()=>({amount:amount}))
        } 
    };
    onDateChange = (createdAt) => {
        if (createdAt){
            this.setState(()=>({createdAt:createdAt}))
        }
    };
    onFocusChange = ({focused}) => {
        this.setState(()=>({calendarFocused:focused}))
     };
     onFormSubmit = (e) => {
         e.preventDefault();
         // do some validation
         if (!this.state.description || !this.state.amount ){
            // set error state to please provide description and amount 
            this.setState(() =>({error:'Please enter the description and amount'}))
         } else {
            this.setState(() =>({error:''}))
                this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
         }
     };

    render() { 
    return (<div>
               {this.state.error && <p>{this.state.error}</p>}
               <form onSubmit={this.onFormSubmit}>
                   <input type="text" placeholder="Description" autoFocus 
                          value={this.state.description}
                          onChange={this.onDescriptionChanage}/> 
                   <input type="text" placeholder="Amount"
                          value={this.state.amount}
                          onChange={this.onAmountChange} />
                   <SingleDatePicker
                        date={this.state.createdAt} 
                        onDateChange={this.onDateChange} //{date => this.setState({ createdAt })} // PropTypes.func.isRequired
                        focused={this.state.calendarFocused} 
                        onFocusChange={this.onFocusChange} 
                        numberOfMonths={1}
                        isOutsideRange={(day)=> false}
                       // id={uuid()} // PropTypes.string.isRequired,
                    />       
                   <textarea placeholder="Add a note for your expense"
                             value ={this.state.note}
                            onChange={this.onNoteChange} >     
                    ></textarea> 
                   <button>Add Expense</button>
               </form>
            </div>
          );
    }
}
 
export default ExpenseForm;