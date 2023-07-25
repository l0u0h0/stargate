import { useState } from "react";
import InputComponent from "../components/atoms/InputComponent";
import PWShown from "../components/atoms/PWShown";
import PWHidden from "../components/atoms/PWHidden";
import AuthNumInputComponent from "../components/atoms/AuthNumInputComponent";
import TimeLeftComponent from "../components/atoms/TimeLeftComponent";
import TextButtonComponent from "../components/atoms/TextButtonComponent";
import ToolTipComponent from "../../atoms/ToolTipComponent";
import { useNavigate } from "react-router-dom";

function MainLending() {
  const [count, setCount] = useState(0);
  const min = 1;
  const sec = 30;

  const navigate = useNavigate();

  const link = (path: string) => {
    navigate(path);
  };

  return (
    // <div className="bg-gradient-to-t from-endbg to-mainblue">
    <div>
      <div className="flex justify-center">
        <p className="text-20">Testing Page</p>
        <p>atoms</p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div className="flex justify-evenly">
          <div className="m-1 card text-16 items-center bg-slate-300">
            inputComponent
            <InputComponent type="text" text="이름" notice="필수 입력" state='red' />
          </div>
          <div className="m-1 card text-16 bg-slate-300">
            PWShown/Hidden
            <PWShown />
            <PWHidden />
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="m-1 card text-16 items-center bg-slate-300">
            <p className="mb-2">AuthNumInputComponent</p>
            <AuthNumInputComponent num={count} />
          </div>
          <div className="m-1 card text-16 items-center bg-slate-300">
            TimeLeftComponent
            <TimeLeftComponent min={min} sec={sec} />
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="m-1 card text-16 items-center bg-slate-300">
            TextButtonComponent
            <TextButtonComponent text="버튼" />
          </div>
          <div className="m-1 card text-16 items-center bg-slate-300 h-100">
            ToolTipComponent
            <ToolTipComponent />
          </div>
        </div>
      </div>
      <p className="read-the-docs">
        <button onClick={() => link(`/signin`)}>Signin</button>
        <button onClick={() => link(`/signup`)}>Signup</button>
        <button onClick={() => link(`/idinquiry`)}>Idinquiry</button>
        <button onClick={() => link(`/pwinquiry`)}>Pwinquiry</button>
      </p>
      <p className="read-the-docs">
        <button onClick={() => link(`/pwreset`)}>PwReset</button>
        <button onClick={() => link(`/admin/signup`)}>AdminSignUp</button>
      </p>
    </div>
  );
}

export default MainLending;
