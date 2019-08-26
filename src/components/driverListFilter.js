import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByAmount, sortByDate,setStartDate,setEndDate} from '../actions/driverFiltersActions';
// import 'react-dates/lib/css/_datepicker.css';


class DriverListFilter extends React.Component{
    state = {
        calanderFocused: null
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange =(calanderFocused) => {
        this.setState(() => ({calanderFocused}));
    }
    render() {
        return (
            <div>
                <input type='text' value={this.props.driverFilters.text} onChange={(e) => {
                    const textValue = e.target.value;
                    this.props.dispatch(setTextFilter(textValue));
                    
                }}/>
                <select value={this.props.driverFilters.sortBy} onChange={
                    (e) => {
                        const selectValue = e.target.value;
                        if( selectValue === 'amount'){
                            this.props.dispatch(sortByAmount());
                        } else if (selectValue === 'date'){
                            this.props.dispatch(sortByDate());
                        }
                    }
                }>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                startDate = {this.props.driverFilters.startDate}
                startDateId="your_unique_start_date_id"
                endDate= {this.props.driverFilters.endDate}
                endDateId="your_unique_start_date_id"
                onDatesChange={this.onDatesChange}
                focusedInput = {this.state.calanderFocused}
                onFocusChange ={this.onFocusChange}
                showClearDates={true}
                isOutsideRange={() => false}
                numberOfMonths={1}
                />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        driverFilters: state.driverFilters
    }
}

export default connect(mapStateToProps)(DriverListFilter);
