import { createAsyncThunk } from '@reduxjs/toolkit';

const addcars = createAsyncThunk(
  'cars/addcars',
  async (car, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ car }),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export default addcars;
