import {createStore, combineReducers, applyMiddleware ,compose} from 'redux';
import {driverListReducer} from '../reducers/driverListReducer';
import {filtersReducer} from '../reducers/driverFilterReducer';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => { // i use this function to get my store data back so i can use it in my app
    const store = createStore(
        combineReducers({
            driverList: driverListReducer,
            driverFilters: filtersReducer
        }),
         composeEnhancer(applyMiddleware(thunk)) 
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;  
}
// Store Creation
