import React from 'react';
import { BrowserRouter, Switch, Route, Router, Redirect } from 'react-router-dom';
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

const generateClassName = createGenerateClassName({
  productionPrefix: 'da',
});
let statusCodes = sessionStorage.getItem("jwttoken");
console.log("statusCodes===", statusCodes)
export default ({ history }) => {
  
  return (
    <div>
       <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route  exact path="/dashboard" render={props => <Dashboard {...props} />} >
              {/* {statusCodes === undefined && <Redirect to="/auth/signin" />} */}
              <Dashboard  />
            </Route>
            {/* <Route exact from="/" render={props => <Dashboard {...props} />} /> */}
            <Route exact path="/dashboard/currentMonth" render={props => <CurrentMonth {...props} />} />
            <Route exact path="/dashboard/customers" render={props => <Customers {...props} />} />
            <Route exact path="/dashboard/integrations" render={props => <Integrations {...props} />} />
            <Route exact path="/dashboard/lastQuarter" render={props => <LastQuarter {...props} />} />
            <Route exact path="/dashboard/reports" render={props => <Reports {...props} />} />
            <Route exact path="/dashboard/yearendsale" render={props => <YearEndSale {...props} />} />
            <Route exact path="/dashboard/orderspage" render={props => <OrdersPage {...props} />} />

          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
