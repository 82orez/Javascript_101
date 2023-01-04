import React from 'react';
import CounterRedux from './CounterRedux';
import Todos from './Todos';

function Presentation() {
  return (
    <div>
      <CounterRedux number={0} />
      <hr />
      <Todos />
    </div>
  );
}

export default Presentation;