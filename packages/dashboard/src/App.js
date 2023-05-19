import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Dashboard from './components/Dashboard';

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
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
