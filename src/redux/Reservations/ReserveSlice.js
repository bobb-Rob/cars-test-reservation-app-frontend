import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

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

export const createReserve = createAsyncThunk(
  'reserve/createReserve',
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/reservations', {
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
  addFromNav: false,
};

const reserveSlice = createSlice({
  name: 'reserve',
  initialState,
  reducers: {
    addFromNav(state, action) {
      const newState = { ...current(state) };
      newState.addFromNav = action.payload;
      return newState;
    },
    isError(state, action) {
      const newState = { ...current(state) };
      newState.error = action.payload;
      return newState;
    },
  },
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
    [createReserve.fulfilled]: (state, action) => {
      const { reservations } = current(state);
      const { reservation } = action.payload;
      return [...reservations, reservation];
    },
  },
});

export default reserveSlice.reducer;
export const { addFromNav, isError } = reserveSlice.actions;
