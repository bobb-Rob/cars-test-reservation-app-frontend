import { configureStore } from '@reduxjs/toolkit';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import logger from 'redux-logger';
import CarsReducer from './Cars/carSlice';
import authenticationReducer from './Auth/authenticationSlice';
import ReserveReducer from './Reservations/ReserveSlice';
import reservationListReducer from './reservationList/reservationListSlice';

export default configureStore({
  reducer: {
    user: authenticationReducer,
    cars: CarsReducer,
    addReservations: ReserveReducer,
    reservations: reservationListReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
