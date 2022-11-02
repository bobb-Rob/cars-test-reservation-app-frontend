import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Cars from './cars/Cars';

function Main() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" element={<Cars />} />
      </Switch>
    </div>

  );
}

export default Main;
