import SignInComponent from '@/organisms/auth/SignInComponent';
import ToolTipComponent from '@/atoms/auth/ToolTipComponent';

/**
 * @todo
 * Toggle 버튼 하나 만들어서 로그인 API 요청할 때
 * 관리자 로그인인지 유저 로그인인지 구분 가능토록
 */
const SignIn = () => {
  return (
    <div className="w-screen">
      <div className="ml-auto mr-auto text-center">
        <h1 className="m-5 text-center text-white t2b">S T A R G A T E</h1>
        <SignInComponent />
        
        <ToolTipComponent />
        <div className="mt-20 mr-20 text-right">
          <ToolTipComponent />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
