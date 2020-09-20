import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import CardDetail from '../pages/Card'

const Router: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/detail/:card_name" component={CardDetail} />
  </Switch>
);

export default Router;
