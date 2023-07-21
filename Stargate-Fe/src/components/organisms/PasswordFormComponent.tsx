import React, { useState } from "react";
import InputComponent from "../atoms/InputComponent";
import PWShown from "../atoms/PWShown";
import PWHidden from "../atoms/PWHidden";

interface PasswordFormProps {
  text: string;
}

const PasswordFormComponent: React.FC<PasswordFormProps> = ({ text }) => {
  const [visiable, setVisiable] = useState(false);

  return (
    <div className="flex">
      <InputComponent text={text} type="password" notice={null} />
      {visiable ? (
        <div onClick={() => setVisiable(false)}>
          <PWHidden />
        </div>
      ) : (
        <div onClick={() => setVisiable(true)}>
          <PWShown />
        </div>
      )}
    </div>
  );
};

export default PasswordFormComponent;
