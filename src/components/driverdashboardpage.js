import React from 'react';
import ConnectedDriverList  from './driverList';
import DriverListFilter from './driverListFilter';

const DriverDashboardPage = () => (
    <div>
        <DriverListFilter />
        <ConnectedDriverList />
    </div>
);

export default DriverDashboardPage;