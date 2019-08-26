import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// const now = moment();
// console.log(now.format('MMM Do YYYY'));


export default class DriverForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            description: props.driver ? props.driver.description: '',
            note: props.driver ? props.driver.note : '',
            amount:props.driver ? (props.driver.amount / 100).toString() :'',
            createdAt :props.driver ? moment(props.driver.createdAt): moment(),
            calanderFocused: false,
            error: ''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };

    onNoteChange = (e) => {
        // if i want to use e.target.value in setState directly i should use e.persist();
        const note = e.target.value;
        this.setState(() => ({note}));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}));
        }
    };

    onFocusChange = ({focused}) => {
        this.setState(() => ({calanderFocused :focused}));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount) {
            if(!this.state.description){
                this.setState(() => ({error:'Please provide the description'}));
            } else if(!this.state.amount){
                this.setState(() => ({error:'Please provide the amount'}));
            }
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note:this.state.note
            })
        }
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value = {this.state.description}
                    onChange={this.onDescriptionChange}
                    />
                    <input 
                    type="text"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    />
                <SingleDatePicker
                    date={this.state.createdAt} 
                    onDateChange={this.onDateChange} 
                    focused={this.state.calanderFocused} 
                    onFocusChange={this.onFocusChange} 
                    numberOfMonths = {1}
                    isOutsideRange = {() => false}
                    />
                    <textarea
                    placeholder="add a note for your driver (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    ></textarea>
                    <button>Add Driver</button>
                </form> 
            </div>

        );
    };
};