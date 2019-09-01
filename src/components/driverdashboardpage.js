import React from 'react';
import ConnectedDriverList  from './driverList';
import DriverListFilter from './driverListFilter';
import DriverSumary from './DriverSummary';

const DriverDashboardPage = () => (
    <div>
        <DriverSumary />
        <DriverListFilter />
        <ConnectedDriverList />
    </div>
);

export default DriverDashboardPage;