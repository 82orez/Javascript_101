import React, {useState} from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Total {count} times clicked!</p>
      <button onClick={() => {setCount(count + 1)}}>click!</button>
    </div>
  );
}

export default Counter;