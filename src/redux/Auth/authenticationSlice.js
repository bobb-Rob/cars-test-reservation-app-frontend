import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import setJwtToken from './saveJwtToken';

export const signUpUser = createAsyncThunk(
  'authentication/signUpUser',
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user }),
      });
      setJwtToken(response, 'signupToken');
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const signInUser = createAsyncThunk(
  'authentication/signInUser',
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3000/users/sign_in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user }),
      });
      setJwtToken(response, 'loginToken');
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const initialState = {
  name: '',
  email: '',
  password: '',
};

const authenticationSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signUpUser.fulfilled]: (state, action) => {
      const {
        admin, email, id, name,
      } = action.payload.status.data;
      const newState = {
        ...current(state),
        name,
        email,
        id,
        admin,
      };
      return newState;
    },
    [signInUser.fulfilled]: (state, action) => {
      const {
        admin, email, id, name,
      } = action.payload.user;
      const newState = {
        ...current(state),
        name,
        email,
        id,
        admin,
      };
      return newState;
    },
  },
});

export default authenticationSlice.reducer;
