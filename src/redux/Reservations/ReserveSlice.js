import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

export const createReserve = createAsyncThunk(
  'reserve/createReserve',
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3000/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('loginToken'),
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const initialState = {
  reservations: [],
  status: 'idle',
  error: null,
};

const reserveSlice = createSlice({
  name: 'reserve',
  initialState,
  reducers: {},
  extraReducers: {
    [createReserve.fulfilled]: (state, action) => {
      console.log(current(state));
      console.log(action.payload);
      const { reservations } = current(state);
      const { data } = action.payload;
      // state.reservations = [...reservations, data];
      console.log(reservations);
      console.log(data);
      console.log(action.payload);
    },
  },
});

export default reserveSlice.reducer;
