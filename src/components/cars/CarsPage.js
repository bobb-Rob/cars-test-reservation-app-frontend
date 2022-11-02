import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const CarsPage = () => (
  <div className="car-layout">
    <Navbar />
    <Outlet />
  </div>
);

export default CarsPage;
