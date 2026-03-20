import { Cookies } from "react-cookie";

const cookies = new Cookies();

//쿠키저장
export const setCookie = (name, value, days) => {
  const expires = new Date();
  expires.setUTCDate(expires.getUTCDate() + days); //현재 + 보관기한
  //path: "/" : 쿠키값이 저장될 장소, expires: expires: 저장기간
  return cookies.set(name, value, { path: "/", expires: expires });
};

//쿠키읽기
export const getCookie = (name) => {
  return cookies.get(name);
};

//쿠키삭제
export const removeCookie = (name, path = "/") => {
  cookies.remove(name, { path });
};
