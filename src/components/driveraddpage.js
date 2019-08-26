import React from 'react';
import {connect} from 'react-redux';
import{addDrivers} from '../actions/driverListActions';
import DriverForm from './driverForm';

const DriverAddPage = (props) => (
    <div>
        <h1>App Driver</h1>
        <DriverForm
        onSubmit={(driver) => {
            props.dispatch(addDrivers(driver));
            props.history.push('/');
        }}
        />
    </div>
);

export default connect()(DriverAddPage);