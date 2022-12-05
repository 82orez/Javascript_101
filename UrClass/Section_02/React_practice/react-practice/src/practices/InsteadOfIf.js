import React from 'react';

function InsteadOfIf() {
  const name = 'react';

  return (
    <div>
      {name === 'react' ? <h1>{`This is ${name}!`}</h1> : <h1>{`This is not React! This is ${name}!`}</h1>}
      <br />

      <h1>{name === 'react' && `This is ${name}!`}</h1>
      <h1>{name !== 'react' && `This is not React! This is ${name}!`}</h1>
    </div>
  );
}

export default InsteadOfIf;
