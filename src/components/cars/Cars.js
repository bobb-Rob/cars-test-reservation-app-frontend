import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cars = () => {
  const navigate = useNavigate();
  // #we can use navigate to redirect to another page

  useEffect(() => {
    // what is useEffect?
    // useEffect is a hook that allows us to run some code when a component is mounted or unmounted
    const token = localStorage.getItem('loginToken');
    // #we can use localStorage to store data in the browser
    // what is getItem?
    // getItem is a method that allows us to get the value of a key in localStorage

    const url = 'http://localhost:3001/cars';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // #we can use headers to set the content type
        // what is content type?
        // content type is a header that tells the server what kind of data we are sending
        Authorization: token,
        // #we can use Authorization to set the token
        // what is Authorization?

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
