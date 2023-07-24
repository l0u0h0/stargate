import React from 'react';
import InputComponent from '../atoms/InputComponent';
import AuthNumberComponent from './AuthNumberComponent';

const PwinquiryComponent = () => {

  return (
    <div className="text-center m-5">
      <h1 className="form-title">비밀번호 찾기</h1>
      <InputComponent text="이메일" type="text" notice={null} state={null} />
      <button className="medium-white h4r">인증번호 받기</button>
      <hr className="mt-10" />
      <AuthNumberComponent />
    </div>
  )
}

export default PwinquiryComponent;