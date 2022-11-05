import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async (_, { rejectWithValue }) => {
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
    if (response.status === 401) {
      return rejectWithValue('Unauthorized');
    }
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

export const deleteReserve = createAsyncThunk(
  'reserve/deleteReserve',
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('loginToken');
      const response = await fetch(`http://localhost:3001/reservations/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
      if (response.status === 401) {
        return rejectWithValue('Unauthorized');
      }
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
      newState.error = action.payload;
      return newState;
    },
    [createReserve.fulfilled]: (state, action) => {
      const newState = { ...current(state) };
      newState.reservations = [...newState.reservations, action.payload.reservation];
      newState.status = action.payload.message;
      return newState;
    },
    [createReserve.rejected]: (state, action) => {
      const newState = { ...current(state) };
      newState.status = 'failed';
      newState.error = action.payload.error;
      return newState;
    },
    [deleteReserve.fulfilled]: (state, action) => {
      const newState = { ...current(state) };
      newState.reservations = newState.reservations.filter(
        (reservation) => reservation.id !== action.payload.id,
      );
      newState.status = action.payload.message;
      return newState;
    },
    [deleteReserve.rejected]: (state, action) => {
      const newState = { ...current(state) };
      newState.status = 'failed';
      newState.error = action.payload.error;
      return newState;
    },
  },
});

export default reserveSlice.reducer;
export const { addFromNav, isError } = reserveSlice.actions;
