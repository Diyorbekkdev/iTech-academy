import { createSlice } from '@reduxjs/toolkit';

interface IAuth {
  data: any;
  isAuthenticated: boolean;
}
const initialState: IAuth = {
  data: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.data = action.payload;
    },
    authenticate(state) {
      state.isAuthenticated = true;
    },
    deauthenticate(state) {
      state.data = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, authenticate, deauthenticate } = authSlice.actions;

export default authSlice.reducer;
