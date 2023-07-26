import React, { useState } from 'react';
import InputComponent from '../atoms/InputComponent';

const MyPageBox = () => {
  const [user, setUser] = useState<object>({
    email: '',
    name: '',
    nickname: '',
    pw: '',
    newPw: '',
    newPwCheck: '',
    phone: '',
    birth: ''
  })

  return <div className='bg-black w-1/2 flex flex-col justify-center items-center'>
    <p className='text-white self-start'>마이페이지</p>
    <InputComponent type="text" text="이메일" keyName="email" getter={user} setter={setUser} />
    <InputComponent type="text" text="이름" keyName="name" getter={user} setter={setUser} />
    <InputComponent type="text" text="닉네임" keyName="nickname" getter={user} setter={setUser} />
    <InputComponent type="text" text="비밀번호" keyName="pw" getter={user} setter={setUser} />
    <InputComponent type="text" text="변경할 비밀번호" keyName="newPw" getter={user} setter={setUser} />
    <InputComponent type="text" text="변경할 비밀번호 확인" keyName="newPwCheck" getter={user} setter={setUser} />
    <InputComponent type="text" text="전화번호" keyName="phone" getter={user} setter={setUser} />
    <InputComponent type="text" text="생년월일" keyName="birth" getter={user} setter={setUser} />
  </div>
};

export default MyPageBox;