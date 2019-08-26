import React from 'react';
import {connect} from 'react-redux';
import {visibleDriver} from '../selector/visibleDriver';
import DriverListItem from './driverListItem';

 const DriverList = (props) => (
    <div>
        <h1>This is my driver list</h1>
        {props.driverList.map((driver) => {
            return <DriverListItem key={driver.id} {...driver}/>
        })}       
    </div>
);

const mapStateToProps = (state) => { // this function determine what data i want from my store
    return {
        driverList: visibleDriver(state.driverList, state.driverFilters)
    };

};

export default connect(mapStateToProps)(DriverList);