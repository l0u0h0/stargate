import React, { useState } from 'react';
import InputComponent from '../atoms/InputComponent';
import PasswordFormComponent from './PasswordFormComponent';
import BtnBlue from '@/atoms/BtnBlue';
import { redirect, useFormAction, useNavigate } from 'react-router-dom';
import { signUpApi, verifyEmail } from '@/services/userService';

interface userType {
  email: string;
  name: string;
  nickname: string;
  pw: string;
  pwCheck: string;
  phone: string;
  birth: string;
}

const SignUpComponent = () => {
  const [emailText, setEmailText] = useState('');
  const [emailState, setEmailState] = useState('red');
  const [user, setUser] = useState<object>({
    email: '',
    name: '',
    nickname: '',
    pw: '',
    pwCheck: '',
    phone: '',
    birth: '',
  });

  const navigate = useNavigate();

  const verify = () => {
    console.log('api 요청');
    // get으로 보내달라 함 쿼리스트링으루
    // 리턴으론 불리언
    const email = (user as userType).email;

    const response = verifyEmail(email);

    if (response) {
      setEmailText('사용 가능한 이메일입니다.');
      setEmailState('green');
    } else {
      setEmailText('사용 불가한 이메일입니다.');
      setEmailState('red');
    }
  };

  const signUp = () => {
    // email Checking
    const regexEmail = new RegExp(
      // eslint-disable-next-line no-control-regex
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );
    const email = (user as userType).email;
    if (email.length == 0 || !regexEmail.test(email)) {
      alert('이메일 형식이 올바르지 않습니다.');
      window.location.reload();
      return 0;
    }

    // pw Checking
    const pw = (user as userType).pw;
    const pwCheck = (user as userType).pwCheck;
    const regexPw = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
    );
    // 일치하지 않는 경우
    if (pw != pwCheck || pw.length == 0) {
      alert('비밀번호가 일치하지 않습니다.');
      window.location.reload();
      return 0;
    }
    if (!regexPw.test(pw)) {
      alert('비밀번호 형식을 다시 확인해주세요.');
      window.location.reload();
      return 0;
    }

    // phoneNumber formatting & Checking
    const phone = (user as userType).phone;
    const numArr = phone.split('');
    const regexPhone = new RegExp(/^\d{3}-\d{3,4}-\d{4}$/);

    if (
      numArr[0] != '0' ||
      numArr[1] != '1' ||
      numArr.length != 11 ||
      regexPhone.test(phone)
    ) {
      alert('잘못된 전화번호 형식입니다.');
      window.location.reload();
      return 0;
    }

    let newPhone = '0';
    numArr.map((num, i) => {
      if (i == 0) return;
      if (i == 3 || i == 7) newPhone += '-';
      newPhone += num;
    });

    // name Checking
    const name = (user as userType).name;
    const regexName = new RegExp(/^[ㄱ-ㅎ가-힣_]{1,20}$/);

    if (!regexName.test(name)) {
      alert('이름에는 한글만 들어갈 수 있습니다.');
      window.location.reload();
      return 0;
    }

    // nickName Checking
    const nickName = (user as userType).nickname;
    const regexNick = new RegExp(/[^a-zA-Z0-9ㄱ-힣]/g);

    if (
      regexNick.test(nickName) ||
      !(nickName.length >= 3 && nickName.length <= 20)
    ) {
      alert('닉네임에는 특수문자가 포함될 수 없습니다.');
      window.location.reload();
      return 0;
    }

    const formData = new FormData();

    formData.append('email', email);
    formData.append('name', (user as userType).name);
    formData.append('nickname', (user as userType).nickname);
    formData.append('password', pw);
    formData.append('phone', newPhone);
    formData.append('birthday', `${(user as userType).birth}T00:00:00.000`);

    const response = signUpApi(formData);

    console.log(response);
    navigate('/');
  };

  return (
    <div className="m-5 max-w-sm ml-auto mr-auto text-center">
      <p className="form-title">회원가입</p>
      <div className="flex items-center">
        <InputComponent
          text="이메일"
          type="email"
          notice={emailText}
          state={emailState}
          keyName="email"
          getter={user}
          setter={setUser}
        />
        <button
          className="medium-white captionb w-1/3 h-10 rounded-lg"
          onClick={verify}
        >
          이메일 확인
        </button>
      </div>
      <div className="flex">
        <InputComponent
          text="이름"
          type="text"
          keyName="name"
          getter={user}
          setter={setUser}
        />
      </div>
      <div className="flex">
        <InputComponent
          text="닉네임"
          type="text"
          keyName="nickname"
          getter={user}
          setter={setUser}
        />
      </div>
      <div className="flex">
        <PasswordFormComponent text="비밀번호" getter={user} setter={setUser} />
      </div>
      <div className="flex">
        <InputComponent
          text="비밀번호 확인"
          type="password"
          keyName="pwCheck"
          getter={user}
          setter={setUser}
        />
      </div>
      <div className="flex">
        <InputComponent
          text="전화번호"
          type="text"
          keyName="phone"
          getter={user}
          setter={setUser}
        />
      </div>
      <div className="flex">
        <InputComponent
          text="생년월일"
          type="date"
          keyName="birth"
          getter={user}
          setter={setUser}
        />
      </div>
      <BtnBlue text="회원가입" onClick={signUp} />
    </div>
  );
};

export default SignUpComponent;
