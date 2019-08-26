import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/header';
import DriverDashboardPage from '../components/driverdashboardpage';
import DriverAddPage from '../components/driveraddpage';
import DriverEditPage from '../components/drivereditpage';
import DriverHelpPage from '../components/driverhelppage';
import DriverNotFoundPage from '../components/drivernotfoundpage';


const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={DriverDashboardPage} exact={true} />
          <Route path="/create" component={DriverAddPage} />
          <Route path="/edit/:id" component={DriverEditPage} />
          <Route path="/help" component={DriverHelpPage} />
          <Route component={DriverNotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  
  export default AppRouter;