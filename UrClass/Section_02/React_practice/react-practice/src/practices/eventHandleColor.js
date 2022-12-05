import React, { useState } from 'react';

const EventHandleColor = () => {
  const [message, setMessage] = useState('Please press a button!');
  const [color, setColor] = useState('black');

  const onClickEnter = () => {
    return setMessage('Hello');
  };
  const onclickLeave = () => {
    setMessage('Good bye');
  };

  return (
    <div>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onclickLeave}>Leave</button>

      <h1 style={{ color }}>{message}</h1>

      <button
        style={{ color: 'red' }}
        onClick={() => {
          return setColor('red');
        }}
      >
        red
      </button>
      <button
        style={{ color: 'green' }}
        onClick={() => {
          setColor('green');
        }}
      >
        green
      </button>
      <button
        style={{ color: 'blue' }}
        onClick={() => {
          setColor('blue');
        }}
      >
        green
      </button>
    </div>
  );
};

export default EventHandleColor;
