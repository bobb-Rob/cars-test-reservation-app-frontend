import React from 'react';
/* eslint-disable react/jsx-props-no-spreading */
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { HiOutlineMail } from 'react-icons/hi';
import { signUpUser } from '../../redux/Auth/authenticationSlice';
import BackArrow from '../utils/BackArrow';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (user, e) => {
    e.preventDefault();
    dispatch(signUpUser(user)).then((response) => {
      console.log(response);
      const { code } = response.payload.status;
      if (code === 200) {
        reset();
        navigate('/signup/success');
      }
    });
  };

  return (
    <div className="sign-in-container">
      <BackArrow />
      <div className="sign-in-form-wrap">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <div>
              <HiOutlineMail />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
              <label htmlFor="name">Full name</label>
            </div>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
            />
            <p>{ errors.name?.message }</p>
          </div>
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
              <label htmlFor="password">Password</label>
            </div>
            <input
              type="password"
              id="password"
              {...register('password', {
                required: 'password is required',
                minLength: {
                  value: 6, message: 'password must be at least 6 characters',
                },
              })}
            />
            <p>{ errors.password?.message }</p>
          </div>
          <button type="submit">Sign up</button>
        </form>
      </div>
      <div>
        <span>
          Already have an account?
          <Link to="/login" className="">Sign in</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUpForm;
