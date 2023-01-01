import React, { useState } from 'react';

// * 초기값을 매개변수로 받아서 count 라는 state 와 count 를 증가/감소시키는 함수를 제공하는 커스텀 훅.
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(Math.max(count - 1, 0));
  };

  return [count, increaseCount, decreaseCount];
}

export default useCounter;