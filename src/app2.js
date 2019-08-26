import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'; // this is export as default const
import configureStore from './store/configStore';
import {Provider} from 'react-redux'; // this is just export const
import {visibleDriver} from './selector/visibleDriver';
import { addDrivers, removeDriver, editDriver} from './actions/driverListActions';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/driverFiltersActions';
import './style/style.scss';

const store = configureStore(); // this will give us the access to everything in store ( store dispatch, subscribe, store getstate


//  store.dispatch(addDrivers({description:'Gas Bill',amount:1300}));
//  store.dispatch(addDrivers({description:'Water Bill', createdAt: 1000}));
//  store.dispatch(addDrivers({description:'Rent', amount: 20500}));

// store.dispatch(setTextFilter('gas'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('water'));
// }, 3000)

// const state = store.getState();
// const visibilityDriver = visibleDriver(state.driverList, state.driverFilters);
// console.log(visibilityDriver);


const jsx =(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx , document.getElementById('app'));