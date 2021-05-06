import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setAuthenticate: (state, action) => {
      var username = action.payload.username;
      var password = action.payload.password;
      axios.post("http://localhost:3001/login", {
        username: username,
        password: password,
      }).then((res)=>{
        console.log(res);
        if(res.status === ''){}
      });
    },
  },
});
export const { setAuthenticate } = authSlice.actions;

export const selectAuth = (state) => state.authentication.isAuthenticated;

export default authSlice.reducer;
