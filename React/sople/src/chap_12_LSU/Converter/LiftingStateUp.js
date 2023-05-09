// * Lifting State Up
// * 상위 컴포넌트의 "상태를 변경하는 함수" 그 자체를 하위 컴포넌트로 전달하고, 이 함수를 하위 컴포넌트가 실행한다.

import React, { useState } from 'react';

function ParentComponent() {
  const [value, setValue] = useState('Change me');

  const handleChangeValue = () => {
    setValue('Different value');
  };

  return (
    <div>
      <div>Value is {value}!</div>
      <ChildComponent handleButtonClick={handleChangeValue} />
    </div>
  );
}
// * 부모 컴포에서 상태를 변경하는 함수는 handleChangeValue 입니다. 전달은 props 를 이용합시다.
// * 하위 컴포넌트가 버튼 클릭 이벤트에 따라 상태를 변경하려고 하므로 이름은 handleButtonClick 이라고 지어줍시다.

function ChildComponent(props) {
  const handleClick = () => {
    // ? 이 버튼을 눌러서 부모의 상태를 바꿀 순 없을까?
    // * 인자로 받은 상태 변경 함수를 실행하자!
    props.handleButtonClick();
  };

  return <button onClick={handleClick}>Change value</button>;
}

export default ParentComponent;
