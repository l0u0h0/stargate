import React from "react";

/**
 * InputComponent
 * @param type => 인풋 태그 타입 설정 변수
 * @param text => 라벨과 플레이스 홀더에 들어갈 인풋 이름 변수
 * @param notice => 있다면 하단에 띄울 공지? 경고 문구
 * @returns
 */
interface InputProps {
  type: string;
  text: string;
  notice: string | null;
}
const InputComponent: React.FC<InputProps> = ({ type, text, notice }) => {
  return (
    <div className="block bg-slate-500 p-1">
      <p className="text-left text-slate-50">{text}</p>
      {type == "password" ? (
        <div>
          <input
            className="w-full border-b-2 border-slate-50 mt-2"
            type={type}
            placeholder={text}
          />
        </div>
      ) : (
        <div>
          <input
            className="w-full border-b-2 border-slate-50 mt-2"
            type={type}
            placeholder={text}
          />
          
        </div>
      )}

      {notice != null ? (
        <p className="text-red-600 text-xs text-left ml-3 mt-3">{notice}</p>
      ) : (
        <p className="ml-3 mt-3"></p>
      )}
    </div>
  );
};

export default InputComponent;
