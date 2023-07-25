import React from 'react';
import InputComponent from '../atoms/InputComponent';

const AdminMyPageBox = () => {
  return <div className='bg-black w-1/2 flex flex-col justify-center items-center'>
    <p className='text-white self-start'>마이페이지</p>
    <InputComponent type="text" text="이메일" />
    <InputComponent type="text" text="회사명" />
    <InputComponent type="text" text="사업자번호" />
    <InputComponent type="text" text="비밀번호" />
    <InputComponent type="text" text="변경할 비밀번호" />
    <InputComponent type="text" text="변경할 비밀번호 확인" />
  </div>
};

export default AdminMyPageBox;