import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

const CarsPage = () => (
  <div className="car-layout">
    <Nav />
    <Outlet />
  </div>
);

export default CarsPage;
