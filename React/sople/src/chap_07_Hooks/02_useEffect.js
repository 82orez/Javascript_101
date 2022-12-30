import React, { useState, useEffect } from 'react';

function UseEffectCounter() {
  const [count, setCount] = useState(0);

  // * 의존성 배열이 생략된 형태.
  // * 컴포넌트가 처음 생성되거나, props 가 업데이트 되거나, state 가 업데이트 될 때마다 실행됩니다.
  // * 결국 class 컴포의 componentDidMount(), componentDidUpdate() 와 동일한 역할.
  useEffect(() => {
    document.title = `You clicked ${count} times.`;
  });

  return (
    <div>
      <h1>{`You clicked ${count} times.`}</h1>
      <button onClick={() => setCount(count + 1)}>Click here!</button>
    </div>
  );
}

export default UseEffectCounter;
