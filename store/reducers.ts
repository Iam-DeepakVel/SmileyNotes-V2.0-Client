import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
};

const storedUser =
  typeof window !== "undefined" ? localStorage.getItem("user") : null;
const storedIsLoggedIn =
  typeof window !== "undefined" ? localStorage.getItem("isLoggedIn") : null;

// if value exists, update initial state
if (storedUser) {
  initialState.user = JSON.parse(storedUser);
}

if (storedIsLoggedIn) {
  initialState.isLoggedIn = JSON.parse(storedIsLoggedIn);
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SET_USER(state, action) {
      state.user = action.payload;
      try {
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(action.payload));
        }
      } catch (err) {
        console.log(err);
      }
    },
    SET_IS_LOGGEDIN(state, action) {
      state.isLoggedIn = action.payload;
      try {
        if (typeof window !== "undefined") {
          localStorage.setItem("isLoggedIn", JSON.stringify(action.payload));
        }
      } catch (err) {
        console.log(err);
      }
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
        localStorage.removeItem("isLoggedIn");
      }
    },
  },
});

export const { SET_USER, SET_IS_LOGGEDIN, logout } = userSlice.actions;
export default userSlice.reducer;
