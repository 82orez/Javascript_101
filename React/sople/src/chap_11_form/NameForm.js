import React, { useState } from 'react';

function NameForm(props) {
  const [value, setValue] = useState('');
  const [request, setRequest] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleChangeRequest = (e) => {
    setRequest(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(`Input name: ${value}
    Request: ${request}`);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type={'text'} value={value} onChange={handleChange} />
      </label>
      <br/>
      <label>
        Request:
        <textarea value={request} placeholder={'Please Request!'} onChange={handleChangeRequest} />
      </label>
      <button type={'submit'}>Submit</button>
    </form>
  );
}

export default NameForm;
