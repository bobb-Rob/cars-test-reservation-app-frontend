import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';

const SignInForm = () => (
  <div>
    <h2>Login</h2>
    <span>Please sign in to continue</span>
    <form action="#">
      <div className="form-group">
        <div>
          <HiOutlineMail />
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label htmlFor="email">Email</label>
        </div>
        <input type="email" name="email" id="email" placeholder="Email" />
      </div>
    </form>
  </div>
);

export default SignInForm;
