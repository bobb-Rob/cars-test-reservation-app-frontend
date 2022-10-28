import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cars = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('loginToken');
    const url = 'http://localhost:3001/cars';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  const logout = async () => {
    const url = 'http://localhost:3001/users/sign_out';
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('loginToken'),
      },
    };

    const response = await fetch(url, options);
    if (response.ok) {
      localStorage.removeItem('loginToken');
      navigate('/login');
    } else {
      throw new Error(response);
    }
    const data = await response.json();
    return data;
  };

  return (
    <div>
      <h1>Cars</h1>
      <button type="button" onClick={logout}>Logout</button>
    </div>
  );
};

export default Cars;
