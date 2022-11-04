import { createAsyncThunk } from '@reduxjs/toolkit';

const addcars = createAsyncThunk(
  'cars/addcars',
  async (car, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('loginToken');
      const response = await fetch('http://localhost:3001/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
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

export const deleteCars = createAsyncThunk(
  'cars/deleteCars',
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('loginToken');
      const response = await fetch(`http://localhost:3001/cars/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export default addcars;
