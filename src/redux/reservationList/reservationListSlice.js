import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
// eslint-disable no-unused-vars

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async () => {
    const token = localStorage.getItem('loginToken');
    const url = 'http://localhost:3001/reservations';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  },
);

const reservationSlice = createSlice({
  name: 'reservations',
  initialState: {
    reservations: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchReservations.pending]: (state) => {
      const newState = { ...current(state) };
      newState.status = 'loading';
      return newState;
    },
    [fetchReservations.fulfilled]: (state, action) => {
      const newState = { ...current(state) };
      newState.reservations = action.payload.reservations;
      newState.status = 'succeeded';
      return newState;
    },
    [fetchReservations.rejected]: (state, action) => {
      const newState = { ...current(state) };
      newState.status = 'failed';
      newState.error = action.error.message;
      return newState;
    },
  },
});

export default reservationSlice.reducer;
