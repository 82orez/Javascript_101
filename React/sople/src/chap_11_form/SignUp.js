import React, { useState } from 'react';

function SignUp(prop) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Man');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(`Name is ${name} & Gender is ${gender}`);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type={'text'} value={name} onChange={handleChangeName} />
      </label>
      <br />
      <label>
        Gender:
        <select value={gender} onChange={handleGender}>
          <option value={'Man'}>Man</option>
          <option value={'Woman'}>Woman</option>
        </select>
      </label>
      <br />
      <button type={'submit'}>Submit</button>
    </form>
  );
}

export default SignUp;
