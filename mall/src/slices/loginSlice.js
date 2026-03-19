import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { build } from "vite";

const initState = {
  email: "",
};

export const loginPostAsync = createAsyncThunk(`loginPostAsync`, (param) => {
  return loginPost(param);
});

const loginSlice = createSlice({
  name: "LoginSlice",
  initialState: initState,
  reducers: {
    login: (state, action) => {
      console.log("로그인 ");
      //{email, pw 로 구성 }
      const data = action.payload;
      //새로운 상태
      return { email: data.email };
    },
    logout: (state, action) => {
      console.log("로그아웃 ............... ");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {})
      .addCase(loginPostAsync.pending, (state, action) => {})
      .addCase(loginPostAsync.rejected, (state, action) => {});
  },
});
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
