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
            <Route path="/dashboard">
              {/* {!isSignedIn && <Redirect to="/auth/signin" />} */}
              <Dashboard  />
            </Route>
            <Route path="/dashboard/currentMonth" component={CurrentMonth} />
            <Route path="/dashboard/customers" component={Customers} />
            <Route path="/dashboard/integrations" component={Integrations} />
            <Route path="/dashboard/lastQuarter" component={LastQuarter} />
            <Route path="/dashboard/reports" component={Reports} />
            <Route path="/dashboard/yearEndSale" component={YearEndSale} />
            <Route path="/dashboard/orders" component={Orders} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
