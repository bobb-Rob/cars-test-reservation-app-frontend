/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { HiOutlineMail } from 'react-icons/hi';
import { signInUser } from '../../redux/Auth/authenticationSlice';

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register, handleSubmit, formState: { errors }, reset,
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
        <h2>Login</h2>
        <span>Please sign in to continue</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <div>
              <HiOutlineMail />
              { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
              <label htmlFor="email">Email</label>
            </div>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required' })}
            />
            <p>{ errors.email?.message }</p>
          </div>
          <div className="form-group">
            <div>
              <HiOutlineMail />
              { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
              <label htmlFor="password">Email</label>
            </div>
            <input
              type="password"
              id="password"
              {...register('password', { required: 'Password is required' })}
            />
            <p>{ errors.password?.message }</p>
          </div>
          <button type="submit">Login</button>
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
