import React, { useState } from "react";
import InputComponent from "../atoms/InputComponent";
import AuthNumberComponent from "./AuthNumberComponent";
import ModalBox from "@/atoms/ModalBox";
import BtnBlue from "@/atoms/BtnBlue";

const PwinquiryComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <div className="text-center m-5">
      <div className="max-w-sm ml-auto mr-auto">
        <h1 className="form-title">비밀번호 찾기</h1>
        <InputComponent text="이메일" type="text" setter={() => setEmail} />
        <BtnBlue text="인증번호 받기" onClick={() => setIsOpen(true)}/>
      </div>
      <AuthNumberComponent isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default PwinquiryComponent;
