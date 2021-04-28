import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import MinPrice from './components/minPrice';
import Error from './components/error';
const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/min-price" render={() => <MinPrice />} />
        <Route path="*" render={() => <Error />} />
      </Switch>
    </BrowserRouter>
  );
};
export default Navigation;
