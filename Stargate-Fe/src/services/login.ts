import axios from "axios";

const onSuccessLogin = (response) => {
  const { accessToken } = response.data;

  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  
}

const onNewAccessToken = async () => {
  await axios.post('http://i9a406.p.ssafy.io:8080/jwt/new-access-token',)
}

const loginApi = async (formData: FormData) => {
  // const response = await axios.get('http://i9a406.p.ssafy.io:8080/tests/get-test', {
  //   withCredentials: true,
  // });
  await axios.post('http://i9a406.p.ssafy.io:8080/fusers/login', formData, {
    withCredentials: true,
  }).then(onSuccessLogin).catch(error => console.error(error));
}

export { onSuccessLogin, loginApi };