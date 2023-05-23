import React from 'react';
import { BrowserRouter, Switch, Route, Router, Redirect } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import CurrentMonth from './components/CurrentMonth';
import Dashboard from './components/Dashboard';
import Customers from './components/Customers';
import Orders from './components/Orders';
import Integrations from './components/Integrations';
import LastQuarter from './components/LastQuarter';
import Reports from './components/Reports';
import YearEndSale from './components/YearEndSale';

const generateClassName = createGenerateClassName({
  productionPrefix: 'da',
});

export default ({ history }) => {
  return (
    <div>
       <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/">
              {/* {!isSignedIn && <Redirect to="/auth/signin" />} */}
              <Dashboard  />
            </Route>
            <Route path="/currentMonth" component={CurrentMonth} />
            <Route path="/customers" component={Customers} />
            <Route path="/integrations" component={Integrations} />
            <Route path="/lastQuarter" component={LastQuarter} />
            <Route path="/reports" component={Reports} />
            <Route path="/yearEndSale" component={YearEndSale} />
            <Route path="/orders" component={Orders} />
          
            {/* <Route path="/dashboard/orders" exact element={<Orders />} component={Orders} />
            <Route path="/dashboard/customers" component={Customers}/> */}
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
