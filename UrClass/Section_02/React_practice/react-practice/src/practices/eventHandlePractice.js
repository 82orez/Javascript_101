import React, { useState } from 'react';

function EventPractice() {
  const [username, setUserName] = useState('');
  const [msg, setMsg] = useState('');

  const handleChangeUsername = (e) => {
    setUserName(e.target.value);
  }
  const handleChangeMsg = (e) => {
    setMsg(e.target.value);
  }
  const handleClick = () => {
    if (username && msg) {
      alert(`Hi ${username}, ${msg}`);
      setUserName('');
      setMsg('');
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  return (
    <div>
      <h1>Event Practice</h1>
      <input
        type={'text'}
        name={'username'}
        placeholder={'Please Name:'}
        value={username}
        onChange={handleChangeUsername}
      />
      <input
        type={'text'}
        name={'msg'}
        placeholder={'Please input something:'}
        value={msg}
        onChange={handleChangeMsg}
        onKeyPress={handleKeyPress}
      />
      {console.log(msg)}
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default EventPractice;
