import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function TemperatureInput(props) {
  const handleChange = (e) => {
    props.onTemperatureChange(e.target.value);
  }

  return (
    <fieldset>
      <legend>Please enter {scaleNames[props.scale]} temperatures</legend>
      <input value={props.temperature} onChange={handleChange}/>
    </fieldset>
  );
}

export default TemperatureInput;