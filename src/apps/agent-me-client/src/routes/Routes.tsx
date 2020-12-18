import React, { Suspense, lazy } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const Home = lazy(() => import('../pages/Home'));
const Agents = lazy(() => import('../pages/Agents'));

const AppRouter = () => {
  return (
    <div>
      <Suspense fallback={'loading...'}>
        <MainLayout>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/agents/:searchValue' exact component={Agents} />

            <Redirect from='/agents' to='/' />
          </Switch>
        </MainLayout>
      </Suspense>
    </div>
  );
};

export default withRouter(AppRouter);
