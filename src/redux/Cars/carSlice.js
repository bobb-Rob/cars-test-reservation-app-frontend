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
    addFromNav: false,
  },
  reducers: {
    addFromNav(state) {
      const newState = { ...state };
      console.log(newState);
      newState.addFromNav = !newState.addFromNav;
      return newState;
    },
  },
  extraReducers: {
    [fetchCars.pending]: (state) => {
      const newState = { ...current(state) };
      newState.status = 'loading';
      return newState;
    },
    [fetchCars.fulfilled]: (state, action) => {
      const newState = { ...current(state) };
      newState.cars = action.payload.cars;
      newState.status = 'succeeded';
      return newState;
    },
    [fetchCars.rejected]: (state, action) => {
      const newState = { ...current(state) };
      newState.status = 'failed';
      newState.error = action.error.message;
      return newState;
    },
  },
});

export default carSlice.reducer;
export const { addFromNav } = carSlice.actions;
