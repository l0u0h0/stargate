import React from 'react';

const ToggleButtonComponent = () => {
  return (
    <>
      <input type="checkbox" id="toggle" hidden />
      <label
        htmlFor="toggle"
        className="block bg-white relative rounded-md shadow-sm w-100 h-5"
      >
        <span className="w-40 h-40 absolute "></span>
      </label>
    </>
  );
};

export default ToggleButtonComponent;
