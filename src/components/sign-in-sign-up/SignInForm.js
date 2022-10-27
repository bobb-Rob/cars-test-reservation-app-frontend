import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';
import { signInUser } from '../../redux/SignInSignUp/authenticationSlice';

const SignInForm = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  console.log(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const user1 = {
      ...user,
      [name]: value,
    };
    setUser(user1);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signInUser(user)).then((response) => {
      console.log(response);
      // const { code } = response.payload.status;
      // if (code === 200) {
      //   setUser({
      //     name: '',
      //     email: '',
      //     password: '',
      //   });
      // }
    });
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-form-wrap">
        <h2>Login</h2>
        <span>Please sign in to continue</span>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <div>
              <HiOutlineMail />
              { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
              <label htmlFor="email">Email</label>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <div>
              <HiOutlineMail />
              { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
              <label htmlFor="password">Email</label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      <div>
        <span>
          Don&apos;t have an account?
          <Link to="/signup" className="">Sign up</Link>
        </span>
      </div>
    </div>
  );
};

export default SignInForm;
