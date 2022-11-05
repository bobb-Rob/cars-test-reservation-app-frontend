import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splash from './sign-in-sign-up/splash';
import SignInForm from './sign-in-sign-up/SignInForm';
import SignUpForm from './sign-in-sign-up/SignUpForm';
import SignUpSuccesPage from './sign-in-sign-up/SignUpSuccesPage';
import CarsPage from './cars/CarsPage';
import Cars from './cars/Cars';
import CarsDetails from './cars/CarsDetails';
import Unauthorized from './sign-in-sign-up/Unauthorized';
import Addcars from './cars/addcars';
import Delete from './cars/delete';
import AddReserveForm from './Reservation/AddReserveForm';
import Reservations from './Reservation/Reservation';

const Routing = () => (
  <Routes>
    <Route path="/" element={<Splash />} />
    <Route path="/login" element={<SignInForm />} />
    <Route path="/login/redirect" element={<Unauthorized />} />
    <Route path="/signup" element={<SignUpForm />} />
    <Route path="/signup/success" element={<SignUpSuccesPage />} />
    <Route path="/cars" element={<CarsPage />}>
      <Route path="" element={<Cars />} />
      <Route path=":carId" element={<CarsDetails />} />
      <Route path="addcar" element={<Addcars />} />
      <Route path=":carId/reservations/add" element={<AddReserveForm />} />
      <Route path="choose/reservations/add" element={<AddReserveForm />} />
      <Route path="reservations" element={<Reservations />} />
      <Route path="delete" element={<Delete />} />
    </Route>

    <Route path="*" element={<h1>404: Not Found</h1>} />
  </Routes>
);

export default Routing;
