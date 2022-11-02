import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Cars from './cars/Cars';
import './main.css';

function Main() {
  return (
    <div className="main">
      <Navbar />

      {/* <Routes>
        <Route exact path="/" element={<Cars />} />
      </Routes> */}
      <Cars />
    </div>

  );
}

export default Main;
