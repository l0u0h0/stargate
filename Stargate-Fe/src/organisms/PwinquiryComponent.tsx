import React, { useState } from 'react';
import InputComponent from '../atoms/InputComponent';
import AuthNumberComponent from './AuthNumberComponent';
import BtnBlue from '@/atoms/BtnBlue';

const PwinquiryComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState<object>({ email: '' });

  return (
    <div className="max-w-sm text-center m-5 ml-auto mr-auto">
      <div className="ml-auto mr-auto">
        <h1 className="form-title">비밀번호 찾기</h1>
        <InputComponent
          text="이메일"
          type="text"
          keyName="email"
          getter={email}
          setter={setEmail}
        />
        <BtnBlue text="인증번호 받기" onClick={() => setIsOpen(true)} />
      </div>
      <AuthNumberComponent isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default PwinquiryComponent;
