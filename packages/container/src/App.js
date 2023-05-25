import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Progress from './components/Progress';
import Header from './components/Header';
import Footer from './components/Footer';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {
  //const [isSignedIn, setIsSignedIn] = useState(false);

  // useEffect(() => {
  //   if (isSignedIn) {
  //     history.push('/dashboard');
  //   }
  // }, [isSignedIn]);

  //console.log("3333333333",Number(sessionStorage.getItem("statusCode")))

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
         <Header />           
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy />
              </Route>
              <Route index path="/dashboard" >                
                <DashboardLazy />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
            <Footer />
          </Suspense>
          
        </div>
      </StylesProvider>
    </Router>
  );
};
