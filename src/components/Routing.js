import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splash from './sign-in-sign-up/splash';
import SignInForm from './sign-in-sign-up/SignInForm';
import SignUpForm from './sign-in-sign-up/SignUpForm';
import SignUpSuccesPage from './sign-in-sign-up/SignUpSuccesPage';
import CarsPage from './cars/CarsPage';

const Routing = () => (
  <Routes>
    <Route path="/" element={<Splash />} />
    <Route path="/login" element={<SignInForm />} />
    <Route path="/signup" element={<SignUpForm />} />
    <Route path="/signup/success" element={<SignUpSuccesPage />} />
    <Route path="/cars" element={<CarsPage />} />
  </Routes>
);

export default Routing;
