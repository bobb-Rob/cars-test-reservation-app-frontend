import React, { useState } from 'react';
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable */
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signUpUser } from '../../redux/Auth/authenticationSlice';
import BackArrow from '../utils/BackArrow';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (user, e) => {
    e.preventDefault();
    setIsError(false);
    setErrorMessage([]);
    dispatch(signUpUser(user)).then((response) => {
      const { code } = response.payload.status;
      if (code === 200) {
        reset();
        navigate('/signup/success');
      } else {
        setIsError(true);
        setErrorMessage(response.payload.status.error);
      }
    });
  };

  const disPlayError = () => errorMessage.map((error, index) => (<p key={index + 2}>{error}</p>));

  return (
    <div className="sign-in-container">
      <BackArrow />
      <div className="sign-in-form-wrap">        
        <div>
          { isError && disPlayError() }
        </div>
        <h2 className="title2">Create Account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <div>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="greens" htmlFor="name">
                Full name
              </label>
            </div>
            <input
              type="text"
              id="name"
              placeholder="Full name"
              className="form-control"
              {...register('name', { required: 'Name is required' })}
            />
            <p>{errors.name?.message}</p>
          </div>
          <div className="form-group">
            <div>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="greens" htmlFor="email">
                Email
              </label>
            </div>
            <input
              className="form-control"
              type="email"
              id="email"
              placeholder="Email"
              {...register('email', { required: 'Email is required' })}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className="form-group">
            <div>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="greens" htmlFor="password">
                Password
              </label>
            </div>
            <input
              className="form-control"
              placeholder="Password"
              type="password"
              id="password"
              {...register('password', {
                required: 'password is required',
                minLength: {
                  value: 6,
                  message: 'password must be at least 6 characters',
                },
              })}
            />
            <p>{errors.password?.message}</p>
          </div>
          <button className="btn btn-success" type="submit">
            Sign up
          </button>
        </form>
        <div className="D">
          <span className="greens">
            Already have an account?
            <Link to="/login" className="">
              Sign in
            </Link>
          </span>
        </div>
      </div>

    </div>
  );
};

export default SignUpForm;
