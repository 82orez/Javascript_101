import React, { useState } from 'react';

function FruitSelect(props) {
  const [value, setValue] = useState('apple');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(`Selected fruit is ${value}!`);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select fruit!
        <select value={value} onChange={handleChange}>
          <option value={'apple'}>apple</option>
          <option value={'banana'}>banana</option>
          <option value={'grape'}>grape</option>
          <option value={'melon'}>melon</option>
        </select>
      </label>
      <br />
      <label>
        Quantity:
        <input type={'number'} />
      </label>
      <br />
      <button type={'submit'}>Submit</button>
    </form>
  );
}

export default FruitSelect;
