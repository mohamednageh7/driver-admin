import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import { visibleDriver} from '../selector/visibleDriver';
import driverTotal from '../selector/driverTotal';

const DriverSumary = ({driverCount, driverTotal}) => {
    const driverWord = driverCount === 1 ? 'driver': 'drivers' ;
    const formatDriverTotal = numeral(driverTotal / 100).format('$0,0.00');

    return (
        <div>
            <p> Viewing {driverCount} {driverWord} Total expenses is {formatDriverTotal}</p>
        </div>
    );   
};

const mapStateToProps = (state) => {
    const driverVisible = visibleDriver(state.driverList, state.driverFilters);
    return {
        driverCount : driverVisible.length,
        driverTotal : driverTotal(driverVisible)

    };   
};

export default connect (mapStateToProps)(DriverSumary);