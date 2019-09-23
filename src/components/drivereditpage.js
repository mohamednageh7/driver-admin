import React from 'react';
import {connect} from 'react-redux';
import {editDriver , setRemoveDriver} from '../actions/driverListActions';
import DriverForm from './driverForm';

const DriverEditPage = (props) => {    
    return (
      <div>
        <DriverForm
        driver={props.driver} // this required to pass the excisting data to my driver form
        onSubmit={(driver) => {
          props.dispatch(editDriver(props.driver.id, driver));
          props.history.push('/');
        }}
        />
         <button onClick={() => {
            props.dispatch(setRemoveDriver({id: props.driver.id}));
            props.history.push('/');
        }}>remove</button>
      </div>
    );
  };

const mapStateToProps = (state, props) => {
  return {
    driver: state.driverList.find((driver) => driver.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(DriverEditPage);