import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import AdminDashboard from '../pages/AdminDashboard';
import CostumerDashboard from '../pages/CustomerDashboard';
import Cart from '../pages/Cart';
import ProductAdd from '../pages/ProductAdd';
import ProductEdit from '../pages/ProductEdit';
import ProductEditImage from '../pages/ProductEditImage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/admin" component={AdminDashboard} />
    <Route path="/shop" component={CostumerDashboard} />
    <Route path="/cart" component={Cart} />
    <Route path="/product-add" component={ProductAdd} />
    <Route path="/product-edit" component={ProductEdit} />
    <Route path="/product-edit-img" component={ProductEditImage} />
  </Switch>
);

export default Routes;
