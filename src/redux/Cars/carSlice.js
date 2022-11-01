import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
// eslint-disable no-unused-vars

export const getCars = createAsyncThunk(
  'cars/getCars',
  async () => {
    const token = localStorage.getItem('loginToken');
    const url = 'http://localhost:3001/cars';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    return data;
  },
);

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getCars.pending]: (state) => {
      const newState = { ...current(state) };
      newState.status = 'loading';
      return newState;
    },
    [getCars.fulfilled]: (state, action) => {
      const newState = { ...current(state) };
      newState.cars = action.payload.cars;
      newState.status = 'succeeded';
      return newState;
    },
    [getCars.rejected]: (state, action) => {
      const newState = { ...current(state) };
      newState.status = 'failed';
      newState.error = action.error.message;
      return newState;
    },
  },
});

export default carSlice.reducer;
