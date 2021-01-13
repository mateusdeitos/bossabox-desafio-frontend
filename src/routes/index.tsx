import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import ComponentsPage from '../pages/Components';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/components" exact component={ComponentsPage} />
  </Switch>
);
export default Routes;
