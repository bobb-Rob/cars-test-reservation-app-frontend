import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splash from './sign-in-sign-up/splash';
import SignInForm from './sign-in-sign-up/SignInForm';
import SignUpForm from './sign-in-sign-up/SignUpForm';
import Cars from './cars/Cars';
import Addcars from './cars/addcars';
import Navbar from '../navbar/Navbar';

const Routing = () => (
  <Routes>
    <Route path="/" element={<Splash />} />
    <Route path="/login" element={<SignInForm />} />
    <Route path="/signup" element={<SignUpForm />} />
    <Route path="/cars" element={<Cars />} />
    <Route path="/addcars" element={<Addcars />} />
    <Route path="/navbar" element={<Navbar />} />
    <Route path="*" element={<h1>404: Not Found</h1>} />
  </Routes>
);

export default Routing;
