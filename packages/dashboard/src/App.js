import React from 'react';
import { BrowserRouter, Switch, Route, Router, Redirect, useHistory  } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import CurrentMonth from './components/CurrentMonth';
import Dashboard from './components/Dashboard';
import Customers from './components/Customers';
import Integrations from './components/Integrations';
import LastQuarter from './components/LastQuarter';
import Reports from './components/Reports';
import YearEndSale from './components/YearEndSale';
import OrdersPage from './components/OrdersPage';
import { Link } from '@material-ui/core';
import Profile from './components/Profile';
import MyAccount from './components/MyAccount';
import AuthApp from './components/AuthApp';

//import  PrivateRoute  from './ProtectedRoute';
//import { AuthContext } from "./../utils/Auth";
const generateClassName = createGenerateClassName({
  productionPrefix: 'da',
});
let statusCodes = sessionStorage.getItem("statusCode");
console.log("statusCodes===", statusCodes)
export default ({ history }) => {
  console.log("sessionStorage===", sessionStorage.length)
  const usenavigate = useHistory();
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
