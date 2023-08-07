import axios from "axios";

// 서버 URL 상수
// const SERVER_URL = 'http://i9a406.p.ssafy.io:8080';
const SERVER_URL = 'https://www.stargate-a406.kro.kr/api';

const api = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
})

export { api };