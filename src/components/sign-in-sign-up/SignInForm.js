/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signInUser } from '../../redux/Auth/authenticationSlice';

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (user, e) => {
    e.preventDefault();
    dispatch(signInUser(user)).then((response) => {
      const { code } = response.payload;
      if (code === 200) {
        reset();
        navigate('/cars');
      }
    });
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-form-wrap h-100%">
        <h2 className="title">Login</h2>
        <span className="p">Please sign in to continue</span>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              {...register('password', { required: 'Password is required' })}
            />
            <p>{errors.password?.message}</p>
          </div>
          <button className="btn btn-success" type="submit">Login</button>
        </form>
        <div className="D">
          <span className="greens ">
            Don&apos;t have an account?
            <Link to="/signup" className="">
              Sign up
            </Link>
          </span>
        </div>
      </div>

    </div>
  );
};

export default SignInForm;
