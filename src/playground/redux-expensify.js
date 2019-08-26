import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// i will use creatStore bcz to many data which will make my creayStore very very long and be complex so i use this to simplify my code

//Add_Drivers
const addDrivers = ({description =  '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type:'ADD_DRIVERS',
    driverList:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//Remove_Driver
const removeDriver = ({id} = {}) => ({
    type:'REMOVE_DRIVER',
    id
});

//Edit_Expense
const editDriver = (id, updates) => ({
    type:'EDIT_DRIVERS',
    id,
    updates
});


//Expense Reducer
const driverListReducerDefaultState = [];
const driverListReducer = (state = driverListReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_DRIVERS':
        return [...state, action.driverList]; // Array Spread Operator
        // state.concat(action.driverList);

        case 'REMOVE_DRIVER':
        return state.filter(({ id }) => id !== action.id );
        
        case 'EDIT_DRIVERS':
        return state.map((driverLists) => {
            if(driverLists.id === action.id) {
                return {
                    ...driverLists,
                    ...action.updates
                };

            } else {
                return driverLists;
            }
        });

        default:
        return state;
    }
};

// Filters Rducer
const driveFiltersDefaultState = {
    text:'',
    sortBy:'date',
    startDate: undefined,
    endDate: undefined
};

//Set Text Filter
const setTextFilter = (text = '') => ({
    type:'SET_TEXT_FILTER',
    text
});

// Sort By Amount
const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT'
});

// Sort By Date
const sortByDate = () => ({
    type:'SORT_BY_DATE'
});

// Set Start Date
const setStartDate = (startDate) => ({
    type:'SET_START_DATE',
    startDate
});

// Set End Date
const setEndDate = (endDate) => ({
    type:'SET_END_DATE',
    endDate
});


// My Filter Reducer
const filtersReducer = (state = driveFiltersDefaultState, action) => {
    switch( action.type){
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text
        };

        case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy: 'amount'
        };

        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy: 'date'
        };

        case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.startDate
        };

        case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.endDate
        };

        default:
        return state;
    }
};


// Visible Driver

const visibleDriver = (driverList, {text, sortBy, startDate, endDate}) => {
    return driverList.filter((driverLists) => {
        const startDateMatch = typeof startDate !== 'number' || driverLists.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || driverLists.createdAt <= endDate;
        const textMatch = driverLists.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
};

// Store Creation
const store = createStore(
    combineReducers({
        driverList: driverListReducer,
        driverFilters: filtersReducer
    })
);


const unsubscribe = store.subscribe(() => {
    const state = store.getState()
    const visibleDrivers = visibleDriver(state.driverList, state.driverFilters);
        console.log(visibleDrivers);
});


// add driver my action
const firstDriver = store.dispatch(addDrivers({
    description: 'bus',
    note: 'This is my driver note',
    amount: 100,
    createdAt: -500
    
}));

const secondDriver = store.dispatch(addDrivers({
    description: 'cars',
    note: 'This is my driver note',
    amount: 1200,
    createdAt: -1000
}));

// start my driver input details action //

// // remove driver action
// store.dispatch(removeDriver({id:secondDriver.driverList.id}));

// // edit driver action
// store.dispatch(editDriver(firstDriver.driverList.id, {amount: 200}));

// start my filter action //

// Set Text Filter
store.dispatch(setTextFilter('s')); // With Value for text

// store.dispatch(setTextFilter()); // With No Value for text

// // Sort By Amount 
store.dispatch(sortByAmount());

// // Sort By Date
store.dispatch(sortByDate());

// // Set Start Date
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());

// // Set End Date
// store.dispatch(setEndDate(999));

// not gonna use just for demonstration
const demoStore = {
    driverList: [{
        id:'dkjsfklw',
        description: 'drive details',
        note: 'This is my driver note',
        amount: 1200,
        createdAt: 0
    }],
    driverFilters:{
        text:'pizza',
        sortBy:'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};