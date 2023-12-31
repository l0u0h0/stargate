import React, { useEffect, useState } from 'react';
import InputComponent from '@/atoms/common/InputComponent';
import PasswordFormComponent from './PasswordFormComponent';
import { useNavigate } from 'react-router-dom';
import { adminSignUpApi, adminVerifyEmail } from '@/services/authService';
import {
  adminValidationCheck,
  emailVaildationCheck,
  pwValidationCheck,
} from '@/hooks/useValidation';
import Swal from 'sweetalert2';

interface adminType {
  email: string;
  company: string;
  bizNum: string;
  pw: string;
  pwCheck: string;
}

const AdminSignUpComponent = () => {
  const [emailText, setEmailText] = useState('사용 불가한 이메일입니다.');
  const [emailState, setEmailState] = useState('red');
  const [pwText, setPwText] = useState('');
  const [pwState, setPwState] = useState('red');
  const [admin, setAdmin] = useState<object>({
    email: '',
    company: '',
    bizNum: '',
    pw: '',
    pwCheck: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const pw = (admin as adminType).pw;
    const pwCheck = (admin as adminType).pwCheck;
    const result = pwValidationCheck(pw, pwCheck);
    if (result == 'SUCCESS') {
      setPwText('비밀번호가 일치합니다.');
      setPwState('green');
    } else {
      setPwText(result);
      setPwState('red');
    }
  }, [admin]);

  // 이메일 중복검사
  const verify = async () => {
    const email = (admin as adminType).email;
    const check = emailVaildationCheck(email);
    if (check != 'SUCCESS') {
      Swal.fire('형식 오류', check, 'warning');
      return 0;
    }
    const formData = new FormData();
    formData.append('email', email);
    const result = await adminVerifyEmail(formData).catch((error) =>
      console.log(error)
    );

    if (result) {
      setEmailText('사용 가능한 이메일입니다.');
      setEmailState('green');
    } else {
      setEmailText('사용 불가한 이메일입니다.');
      setEmailState('red');
    }
  };

  const adminSignUp = () => {
    // 입력 폼 유효성 검사
    const validation = adminValidationCheck(admin as adminType);
    // 'SUCCESS'가 리턴되지 않았다면 리턴값 출력
    if (validation != 'SUCCESS') {
      Swal.fire('형식 오류', validation, 'warning');
      return 0;
    }

    // API 에 담아 보낼 폼데이터 생성
    const formData = new FormData();
    formData.append('email', (admin as adminType).email);
    formData.append('name', (admin as adminType).company);
    formData.append('code', (admin as adminType).bizNum);
    formData.append('password', (admin as adminType).pw);

    const response = adminSignUpApi(formData);

    // Api 호출 한 결과 받아와서 성공 시 메인 페이지로 네비게이트
    response
      .then((response) => {
        if (response == 'alreadyToken') {
          Swal.fire(
            '회원가입 실패',
            '로그인 상태로는 회원가입을 할 수 없습니다.',
            'warning'
          );
          navigate('/');
        }
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        Swal.fire('서버 에러', '회웝가입에 문제가 발생했습니다.', 'error');
      });
  };

  return (
    <div className="m-5 min-w-fit mx-auto text-center">
      <p className="form-title">관리자 회원가입</p>
      <div className="flex items-center w-s">
        <InputComponent
          text="이메일"
          type="email"
          notice={emailText}
          state={emailState}
          keyName="email"
          getter={admin}
          setter={setAdmin}
        />
        <button
          className="medium-white captionb w-1/3 h-10 rounded-lg"
          onClick={() => {
            verify()
              .then()
              .catch((error) => console.log(error));
          }}
        >
          이메일 확인
        </button>
      </div>
      <div className="flex">
        <InputComponent
          text="회사명"
          type="text"
          keyName="company"
          getter={admin}
          setter={setAdmin}
        />
      </div>
      <div className="flex">
        <InputComponent
          text="사업자 번호"
          type="text"
          keyName="bizNum"
          getter={admin}
          setter={setAdmin}
        />
      </div>
      <div className="flex">
        <PasswordFormComponent
          text="비밀번호"
          getter={admin}
          setter={setAdmin}
        />
      </div>
      <div className="flex">
        <InputComponent
          text="비밀번호 확인"
          type="password"
          notice={pwText}
          state={pwState}
          keyName="pwCheck"
          getter={admin}
          setter={setAdmin}
        />
      </div>
      <button className="medium-white" onClick={adminSignUp}>
        회원가입
      </button>
    </div>
  );
};

export default AdminSignUpComponent;
