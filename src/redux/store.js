import { configureStore } from '@reduxjs/toolkit';

/* eslint-disable-next-line import/no-extraneous-dependencies */
import logger from 'redux-logger';
import authenticationReducer from './SignInSignUp/authenticationSlice';

export default configureStore({
  reducer: {
    user: authenticationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
