import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const CarsPage = () => (
  <div className="car-layout">
    <Navbar />
    <Outlet />
  </div>
);

export default CarsPage;
