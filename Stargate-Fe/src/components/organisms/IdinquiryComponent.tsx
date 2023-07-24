import React from 'react';
import InputComponent from '../atoms/InputComponent';

const IdinquiryComponent = () => {
  return (
    <div className="text-center m-5">
      <h1 className="form-title">아이디 찾기</h1>
      <div>
        <InputComponent type="text" text="이름" notice="본명을 입력해주세요" state="gray-100" />
        <InputComponent type="text" text="전화번호" notice={null} state={null} />
      </div>
      <button className="medium-white p1r w-24 h-full rounded-lg">확인</button>
    </div>
  )
}

export default IdinquiryComponent;