import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import setJwtToken from './saveJwtToken';

export const getUser = createAsyncThunk(
  'user/getUser',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('loginToken');
      const url = 'http://localhost:3001/current_user';
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
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const signUpUser = createAsyncThunk(
  'authentication/signUpUser',
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/users', {
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
      const response = await fetch('http://localhost:3001/users/sign_in', {
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

export const logout = createAsyncThunk(
  'authentication/logout',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('loginToken');
      const response = await fetch('http://localhost:3001/users/sign_out', {
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

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  status: 'idle',
  error: null,
};

const authenticationSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser(state) {
      const newState = { ...current(state) };
      newState.user = {
        name: '',
        email: '',
        password: '',
      };
      newState.error = null;
      newState.status = 'idle';
      return newState;
    },
  },
  extraReducers: {
    [signUpUser.fulfilled]: (state, action) => {
      const newState = { ...current(state) };
      newState.user = action.payload.status.data;
      newState.status = action.payload.message;
      return newState;
    },
    [signUpUser.rejected]: (state, action) => {
      const newState = { ...current(state) };
      newState.error = action.payload;
      newState.status = 'failed';
      return newState;
    },
    [signInUser.fulfilled]: (state, action) => {
      const newState = { ...current(state) };
      newState.user = action.payload.user;
      newState.status = 'logged-in';
      newState.error = null;
      return newState;
    },
    [signInUser.rejected]: (state, action) => {
      const newState = { ...current(state) };
      newState.error = action.payload;
      newState.status = 'failed';
      return newState;
    },
    [logout.fulfilled]: (state) => {
      const newState = { ...current(state) };
      newState.user = {
        name: '',
        email: '',
        password: '',
      };
      newState.status = 'not-logged-in';
      return newState;
    },
    [getUser.fulfilled]: (state, action) => {
      const newState = { ...current(state) };
      newState.user = action.payload;
      newState.status = 'logged-in';
      return newState;
    },
    [getUser.rejected]: (state, action) => {
      const newState = { ...current(state) };
      newState.error = action.payload;
      newState.status = 'failed';
      return newState;
    },
  },
});

export default authenticationSlice.reducer;
export const { clearUser } = authenticationSlice.actions;
