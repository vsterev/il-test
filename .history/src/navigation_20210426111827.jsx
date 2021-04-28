import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import MinPrice from './components/minPrice';
const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/min-price" component={MinPrice} />
      </Switch>
    </BrowserRouter>
  );
};
export default Navigation;
