import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import CurrentMonth from './components/CurrentMonth/CurrentMonth';
import Dashboard from './components/Dashboard';
import Customers from './components/Customers/Customers';
import Integrations from './components/Integrations/Integrations';
import LastQuarter from './components/LastQuarter/LastQuarter';
import Reports from './components/Reports/Reports';
import YearEndSale from './components/YearEndSale/YearEndSale';
import OrdersPage from './components/Orders/OrdersPage';
import Profile from './components/Profile/Profile';
import MyAccount from './components/MyAccount/MyAccount';
import AuthApp from './components/AuthApp'; 

const generateClassName = createGenerateClassName({
  productionPrefix: 'da',
});
export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
           <Route exact path="/dashboard" render={props => <Dashboard {...props} />} >
                <Dashboard />
              </Route > 
            <Route exact path="/dashboard/currentMonth" render={props => <CurrentMonth {...props} />} />
            <Route exact path="/dashboard/customers" render={props => <Customers {...props} />} />
            <Route exact path="/dashboard/integrations" render={props => <Integrations {...props} />} />
            <Route exact path="/dashboard/lastQuarter" render={props => <LastQuarter {...props} />} />
            <Route exact path="/dashboard/reports" render={props => <Reports {...props} />} />
            <Route exact path="/dashboard/chartList" render={props => <YearEndSale {...props} />} />
            <Route exact path="/dashboard/orderspage" render={props => <OrdersPage {...props} />} />
            <Route exact path="/dashboard/profile" render={props => <Profile {...props} />} />
            <Route exact path="/dashboard/my-account" render={props => <MyAccount {...props} />} />
            <Route exact path="/auth/signin" render={props => <AuthApp {...props} />} />

          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
