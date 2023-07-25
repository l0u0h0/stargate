import React from 'react';
import InputComponent from '@/atoms/InputComponent';

const MyPageBox = () => {
  return <div className='bg-black w-1/2 flex flex-col justify-center items-center'>
    <p className='text-white self-start'>마이페이지</p>
    <InputComponent type="text" text="이메일" />
    <InputComponent type="text" text="이름" />
    <InputComponent type="text" text="닉네임" />
    <InputComponent type="text" text="비밀번호" />
    <InputComponent type="text" text="변경할 비밀번호" />
    <InputComponent type="text" text="변경할 비밀번호 확인" />
    <InputComponent type="text" text="전화번호" />
    <InputComponent type="text" text="생년월일" />
  </div>
};

export default MyPageBox;