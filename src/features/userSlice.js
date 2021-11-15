import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
  user: null,
  },

  reducers: {
    //login
    login: (state, action) => {
      state.user = action.payload;
    },
    //logout makes the user null
    logout: (state) => {
      state.user = null;
    },
  },
  
});

export const {login, logout} = userSlice.actions;

// SELECTOR, selects the user from the data layer
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
