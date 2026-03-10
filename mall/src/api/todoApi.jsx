import axios from "axios";

//서버주소
export const API_SERVER_HOST = "http://localhost:8080";
const prefix = `${API_SERVER_HOST}/api/todo`;

export const getOne = async (tno) => {
  const res = await axios.get(`${prefix}/${tno}`);
  return res.data;
};
