import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splash from './sign-in-sign-up/splash';
import SignInForm from './sign-in-sign-up/SignInForm';
import SignUpForm from './sign-in-sign-up/SignUpForm';
import SignUpSuccesPage from './sign-in-sign-up/SignUpSuccesPage';
import CarsPage from './cars/CarsPage';
import Cars from './cars/Cars';
import CarsDetails from './cars/CarsDetails';
import Addcars from './cars/addcars';
import Reservation from './reservation/Reservation';

const Routing = () => (
  <Routes>
    <Route path="/" element={<Splash />} />
    <Route path="/login" element={<SignInForm />} />
    <Route path="/signup" element={<SignUpForm />} />
    <Route path="/signup/success" element={<SignUpSuccesPage />} />
    <Route path="/cars" element={<CarsPage />}>
      <Route path="" element={<Cars />} />
      <Route path=":carId" element={<CarsDetails />} />
    </Route>
    <Route path="/addcar" element={<Addcars />} />
    <Route path="/reservation" element={<Reservation />} />

    <Route path="*" element={<h1>404: Not Found</h1>} />
  </Routes>
);

export default Routing;
