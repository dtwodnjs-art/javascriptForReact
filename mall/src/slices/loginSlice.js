import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { getCookie, setCookie, removeCookie } from "../util/cookieUtil";

const initState = {
  email: "",
};

const loadMemberCookie = () => {
  const memberInfo = getCookie("member");
  //%ED%99%8D%EA%B8%B8%EB%8F%99 => 홍길동
  if (memberInfo && memberInfo.nickname) {
    memberInfo.nickname = decodeURIComponent(memberInfo.nickname);
  }
  return memberInfo;
};

export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) => {
  return loginPost(param);
});

const loginSlice = createSlice({
  name: "LoginSlice",
  initialState: loadMemberCookie() || initState,
  reducers: {
    login: (state, action) => {
      const data = action.payload;
      console.log("로그인 금고지기" + data.email + "  " + data.pw);
      setCookie("member", JSON.stringify(data), 1);
      return data;
    },
    logout: (state, action) => {
      removeCookie("member");
      return { ...initState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log("fulfilled: 완료" + action.payload.email);
        //에러가 없다면
        if (!action.payload.error) {
          console.log("쿠키에 저장");
          setCookie("member", JSON.stringify(action.payload), 1);
        }
        return action.payload;
      })
      .addCase(loginPostAsync.pending, (state, action) => {
        console.log("pending: 처리중");
      })
      .addCase(loginPostAsync.rejected, (state, action) => {
        console.log("rejected: 오류");
      });
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
