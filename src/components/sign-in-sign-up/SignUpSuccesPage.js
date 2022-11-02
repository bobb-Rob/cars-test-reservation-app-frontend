import React from 'react';
import { Link } from 'react-router-dom';

const SignUpSuccesPage = () => (
  <div>
    <h1>Successfully signed up</h1>
    <Link to="/login">Login</Link>
  </div>
);

export default SignUpSuccesPage;
