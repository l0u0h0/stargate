import axios, { Axios, AxiosResponse } from 'axios';

interface tokenType {
  accessToken: string;
  refreshToken: string;
}

interface newTokenType {
  accessToken: string;
}

interface checkEmailType {
  exist: string;
}

const api = axios.create({
  baseURL: 'http://i9a406.p.ssafy.io:8080',
});

// common => 토큰 만료시간 체크 메서드
// Back으로 넘어가는 API 호출 최대한 줄이게
// API 호출 전에 만료여부 체크
const checkTokenExpTime = () => {
  if (!localStorage.getItem('refreshToken')) return 'NoToken';
  const expTime = parseFloat(
    JSON.stringify(localStorage.getItem('tokenExpTime'))
  );
  if (expTime < Date.now() / 1000) {
    reAccessApi;
  }
  return 'SUCCESS';
};

// 로그인 요청 성공 시 엑세스 토큰 헤더에 넣고 리프레쉬 토큰 로컬 스토리지에 저장
const onSuccessLogin = (response: AxiosResponse<tokenType>) => {
  const { accessToken, refreshToken } = response.data;
  console.log(response.status);
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  localStorage.setItem('refrestToken', refreshToken);
  localStorage.setItem('tokenExpTime', `${Date.now() / 1000 + 59 * 60 * 24}`);

  console.log(
    'accessToken: ' + accessToken + ', refreshToken: ' + refreshToken
  );
};

// AccessToken이 없을 때,(만료됐을 때 재발급)
const onNewAccessToken = (response: AxiosResponse<newTokenType>) => {
  const { accessToken } = response.data;
  console.log(response.status);
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  console.log('AccessToken 재발급');
};

const loginApi = async (formData: FormData) => {
  // 유저 로그인 요청
  // fullfiled 로그인 성공, 토큰들 반환
  // rejected 에러 발생, status 401
  let response = 'SUCCESS';
  await api
    .post('/fusers/login', formData)
    .then(onSuccessLogin)
    .catch((error) => {
      console.log(error);
      response = 'FAIL';
    });

  return response;
};

const logoutApi = async () => {
  await api
    .post('/fusers/logout')
    .then()
    .catch((error) => console.log(error));

  axios.defaults.headers.common['Authorization'] = '';
  localStorage.clear();
};

const signUpApi = async (formData: FormData) => {
  const response = await api
    .post('/fusers/register', formData)
    .then()
    .catch((error) => console.log(error));

  return response;
};

const reAccessApi = async () => {
  const refreshToken = JSON.stringify(localStorage.getItem('refreshToken'));

  await api
    .post('/jwt/new-access-token', refreshToken)
    .then(onNewAccessToken)
    .catch((error) => console.log(error));
};

const onCheckedResponse = (response: AxiosResponse<checkEmailType>) => {
  const { exist } = response.data;
  if (exist == 'true') {
    return true;
  } else return false;
};

const verifyEmail = (email: string) => {
  let result = true;
  api
    .get(`/fusers/check-email?email=${email}`)
    .then((response: AxiosResponse<checkEmailType>) => {
      result = onCheckedResponse(response);
    })
    .catch((error) => console.log(error));

  return !result;
};

export {
  onSuccessLogin,
  loginApi,
  logoutApi,
  reAccessApi,
  signUpApi,
  verifyEmail,
};
