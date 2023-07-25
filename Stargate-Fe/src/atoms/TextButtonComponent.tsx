import React from "react";

/**
 * @param text => 버튼에 담길 텍스트 변수
 */

interface TextButtonProps {
  text: string;
  method: () => void;
}

const TextButtonComponent: React.FC<TextButtonProps> = ({ text, method }) => {
  return (
    <div className="m-2 mt-0">
      <a className="text-slate-50 duration-100" onClick={method}>{text}</a>
    </div>
  );
};

export default TextButtonComponent;
