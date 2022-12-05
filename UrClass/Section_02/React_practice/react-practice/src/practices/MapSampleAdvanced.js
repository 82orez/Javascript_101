import React, { useState } from 'react';

const MapSampleAdvanced = () => {
  const [names, setNames] = useState([
    { id: 1, text: 'snowman' },
    { id: 2, text: 'ice' },
    { id: 3, text: 'snow' },
    { id: 4, text: 'wind' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => {
    setInputText(e.target.value);
  };
  const onSubmit = () => {
    if (inputText) {
      const nextNames = names.concat({
        id: nextId,
        text: inputText,
      });
      setNames(nextNames);
      setNextId(nextId + 1);
      setInputText('');
    }
  };

  const onRemove = (id) => {
    const nextNames = names.filter((value) => {
      return value.id !== id;
    });
    setNames(nextNames);
  };

  const nameList = names.map((value) => {
    return (
      <li key={value.id} onDoubleClick={() => onRemove(value.id)}>
        {value.text}
      </li>
    );
  });

  return (
    <div>
      <input type={'text'} value={inputText} onChange={onChange} />
      <button onClick={onSubmit}>Submit</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default MapSampleAdvanced;
