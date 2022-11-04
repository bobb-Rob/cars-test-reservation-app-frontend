import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => (
  <div>
    <h1>You need to login to continue</h1>
    <Link to="/login">Login</Link>
  </div>
);

export default Unauthorized;
