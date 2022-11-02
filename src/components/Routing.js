import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splash from './sign-in-sign-up/splash';
import SignInForm from './sign-in-sign-up/SignInForm';
import SignUpForm from './sign-in-sign-up/SignUpForm';
import Cars from './cars/Cars';
import Addcars from './cars/addcars';
import Main from './Main';

const Routing = () => (
  <Routes>
    <Route path="/" element={<Splash />} />
    <Route path="/login" element={<SignInForm />} />
    <Route path="/signup" element={<SignUpForm />} />
    <Route path="/cars" element={<Cars />} />
    <Route path="/addcars" element={<Addcars />} />
    <Route path="/main" element={<Main />} />
    <Route path="*" element={<h1>404: Not Found</h1>} />
  </Routes>
);

export default Routing;
