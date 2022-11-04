import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
// eslint-disable no-unused-vars

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (_, { rejectWithValue }) => {
    try {
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
      if (response.status === 401) {
        console.log('Unauthorized');
        return rejectWithValue('Unauthorized');
      }
      const data = await response.json();
      console.log(response);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
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
    [fetchCars.pending]: (state) => {
      const newState = { ...current(state) };
      newState.status = 'loading';
      return newState;
    },
    [fetchCars.fulfilled]: (state, action) => {
      const newState = { ...current(state) };
      newState.cars = action.payload.cars;
      newState.user = action.payload.user || {};
      newState.status = 'succeeded';
      return newState;
    },
    [fetchCars.rejected]: (state, action) => {
      const newState = { ...current(state) };
      newState.status = 'failed';
      newState.error = action.payload;
      return newState;
    },
  },
});

export default carSlice.reducer;
