import React from "react";
import InputComponent from "../atoms/InputComponent";

const SignUpComponent = () => {
  return (
    <div>
      <p>회원가입</p>
      <InputComponent
        text="이메일"
        type="email"
        notice="사용 가능한 이메일입니다."
      />
    </div>
  );
};

export default SignUpComponent;
