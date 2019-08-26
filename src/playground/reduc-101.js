import {createStore} from 'redux';


// Action Generator => functions that return action object 
/*
Advantage of this:
1- show error when something wrong in my type
2- add my feature
3- object destructure to simplify my code
*/

const incrementCount = ({incrementBy = 1} = {}) => ({
    type:'INCREMENT',
    incrementBy
});

const decrementCount  = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count = 101} = {}) => ({
    type:'SET',
    count
});

const restCount = () => ({
    type: 'RESET'
});

// this function called a reducer
/*
1- this is a pure funcition
2- Never change state or action 
*/
const countReducer = (state = { count:0 }, action) => { 
    switch (action.type){
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count:0
            };
        default:
        return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// store.dispatch({
//     type:'INCREMENT',
//     incrementBy: 2
// });
store.dispatch(incrementCount({incrementBy: 5}));

// store.dispatch({
//     type:'INCREMENT'
// });
store.dispatch(incrementCount());

// store.dispatch({
//     type:'DECREMENT',
//     decrementBy : 10
// });
store.dispatch(decrementCount({decrementBy: 10}));

// store.dispatch({
//     type:'DECREMENT'
// });
store.dispatch(decrementCount());


// store.dispatch({
//     type:'SET',
//     count: 101
// });
store.dispatch(setCount({count: 201}));

// store.dispatch({
//     type:'SET'
// });
store.dispatch(setCount());

// store.dispatch({
//     type:'RESET'
// });
store.dispatch(restCount());

