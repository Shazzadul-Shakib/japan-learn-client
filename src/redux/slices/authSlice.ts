import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    logoutUser(state) {
      state.user = null;
    },
  },
});

// --- export actions --- //
export const { setUser, logoutUser } = userSlice.actions;

// --- export the reducer --- //
export default userSlice.reducer;
