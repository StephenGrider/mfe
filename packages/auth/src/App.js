import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Signin from './components/login/Signin';
import Signup from './components/signup/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});
console.log("Auth files signin========================", process.env.REACT_APP_API_URL);
export default ({ history, onSignIn }) => {
console.log("onSignIn ==== 00000 ========================", onSignIn);
  
  return (
    
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={Signin} />
           
            <Route path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
  );
};
