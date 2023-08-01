import React from 'react';

/**
 * AuthNumInputComponent
 * @param num => 인증번호 값!
 */
interface AuthNumInputProps {
  index: number;
  num: number;
  numArr: number[];
  setNumArr: React.Dispatch<React.SetStateAction<number[]>>;
}

const AuthNumInputComponent: React.FC<AuthNumInputProps> = ({ index, num, numArr, setNumArr }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newArr = [...numArr];
    newArr[index] = parseInt(value);
    setNumArr(newArr);
  };

  return (
    <div className="m-1.5 border-2 border-blue-600 rounded-lg w-14 h-20 relative content-center">
      {/* <p className="block text-black text-48 mt-auto mb-auto">{num}</p> */}
      <input
        maxLength={1}
        type="text"
        name=""
        onChange={(e) => onChange(e)}
        className="text-center block text-black text-48 m-auto mt-1 w-10 h-16 outline-none"
      ></input>
    </div>
  );
};

export default AuthNumInputComponent;
