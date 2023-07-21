import React from "react";
import InputComponent from "../atoms/InputComponent";
import PasswordFormComponent from "./PasswordFormComponent";

const SignUpComponent = () => {
  return (
    <div>
      <p className="text-60">회원가입</p>
      <div className="flex">
        <InputComponent
          text="이메일"
          type="email"
          notice="사용 불가한 이메일입니다."
        />
        <button>이멜버튼(예정)</button>
      </div>
      <div className="flex">
        <InputComponent text="이름" type="text" notice={null} />
      </div>
      <div className="flex">
        <InputComponent text="닉네임" type="text" notice={null} />
      </div>
      <div className="flex">
        <PasswordFormComponent text="비밀번호" />
      </div>
      <div className="flex">
        <InputComponent text="비밀번호 확인" type="password" notice={null} />
      </div>
      <div className="flex">
        <InputComponent text="전화번호" type="text" notice={null} />
      </div>
      <div className="flex">
        <InputComponent text="생년월일" type="text" notice={null} />
      </div>
      <button>회원가입(예정)</button>
    </div>
  );
};

export default SignUpComponent;
