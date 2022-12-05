import React, { useState } from 'react';

// ! State 가 여러 개인 경우 객체 형태로 만들어 준다.
function EventPracticeManyStates() {
  const [form, setForm] = useState({
    username: '',
    msg: '',
  });

  const { username, msg } = form;

  const handleChange = (e) => {
    // * 빈 객체에 먼저 기존의 객체를 전개연산자로 불러온 다음 name 에 해당하는 key 의 값을 변경한다.
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const handleClick = () => {
    if (username && msg) {
      alert(`Hi ${username}, ${msg}`);
      setForm({
        username: '',
        msg: '',
      });
    }
  };

  return (
    <div>
      <h1>Event Handle Many States</h1>
      <input type={'text'} name={'username'} placeholder={'Please Name:'} value={username} onChange={handleChange} />
      <input type={'text'} name={'msg'} placeholder={'Please input something:'} value={msg} onChange={handleChange} />
      {console.log(msg)}
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default EventPracticeManyStates;
