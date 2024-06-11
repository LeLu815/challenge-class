import axios from "axios";
// npm install axios
// 나만의 인스턴스 커스텀, 여러 개 다 만들수 있다.
// 요청을 보내는 주체로서 client라는 이름을 자주 사용한다.

export const BASE_URL = "https://api.ballang.yoojinyoung.com";
export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "Bearer token~~",
  },
});

export const updateToken = (token) => {
  client.defaults.headers.common.Authorization = token ? `Bearer ${token}` : "";
};
