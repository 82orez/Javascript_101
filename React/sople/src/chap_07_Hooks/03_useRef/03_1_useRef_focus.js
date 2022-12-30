import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  // * const 주소값을_담는_그릇 = useRef(초기값_참조자료형)
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type={'text'} />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}

export default TextInputWithFocusButton;
