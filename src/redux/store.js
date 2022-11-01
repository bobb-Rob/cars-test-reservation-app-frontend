import { configureStore } from '@reduxjs/toolkit';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import logger from 'redux-logger';
import CarsReducer from './Cars/carSlice';
import authenticationReducer from './Auth/authenticationSlice';

export default configureStore({
  reducer: {
    user: authenticationReducer,
    cars: CarsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
