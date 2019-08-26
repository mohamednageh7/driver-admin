import {createStore, combineReducers} from 'redux';
import {driverListReducer} from '../reducers/driverListReducer';
import {filtersReducer} from '../reducers/driverFilterReducer';


export default () => { // i use this function to get my store data back so i can use it in my app
    const store = createStore(
        combineReducers({
            driverList: driverListReducer,
            driverFilters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;  
}
// Store Creation
