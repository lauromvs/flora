import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import AdminDashboard from '../pages/AdminDashboard';
import CostumerDashboard from '../pages/CustomerDashboard';
import Cart from '../pages/Cart';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/admin" component={AdminDashboard} />
    <Route path="/shop" component={CostumerDashboard} />
    <Route path="/cart" component={Cart} />
  </Switch>
);

export default Routes;
