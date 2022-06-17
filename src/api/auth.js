import axios from "axios";

const BASE_URL = "http://3.39.9.190:5006/api/v1";

export const auth = axios.create({ baseURL: BASE_URL,
  "Content-Type": `application/json`,
  // , withCredentials: true
 });
export const client = axios.create({
  baseURL: BASE_URL,
  "Content-Type": `application/json`,
  // withCredentials: true,
});

export async function authJoin(data) {
  const payload = {
    id: data.id,
    password: data.password,
    name: data.name,
    gender: data.gender ? data.gender : "",
    nickname: data.nickname ? data.nickname : "",
  };

  const response = await auth.post("/login/join", payload);
  return response;
}

export async function authLogin(data) {
  const response = await auth.post("/login/login", data);
  console.log(response);

  //헤더 들어가는지 확인
  setClientHeaders(response.Authorization);
  return response;
}

const setClientHeaders = (token) => {
  client.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};
