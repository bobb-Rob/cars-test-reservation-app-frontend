
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
  return data;
}
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
      state.status = 'loading';
    },
    [getCars.fulfilled]: (state, action) => {
    
    },
    [getCars.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  },
});

export default carSlice.reducer;
