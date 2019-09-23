import React from 'react';
import {connect} from 'react-redux';
import{startAddDriver} from '../actions/driverListActions';
import DriverForm from './driverForm';


export class DriverAddPage extends React.Component{
    onSubmit= (driverList) => {
        this.props.startAddDriver(driverList);
        this.props.history.push('/');
    }
    render(){
        return(
    <div>
        <h1>App Driver</h1>
        <DriverForm
        onSubmit={this.onSubmit}
        /> 
    </div>
        )}
};

const mapDispatchToProps = (dispatch) => {
    return {
        startAddDriver: (driverList) => dispatch(startAddDriver(driverList))
    }
}

export default connect(undefined,mapDispatchToProps)(DriverAddPage);