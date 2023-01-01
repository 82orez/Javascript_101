import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

function toCelsius(f) {
  return ((f - 32) * 5) / 9;
}

function toFah(c) {
  return (c * 9) / 5 + 32;
}

// * 온도와 콜백함수(toCelsius, toFah) 를 인자로 가진다.
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;

  return rounded.toString();
}
function Converter(props) {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale('c');
  };
  const handleFahChange = (temperature) => {
    setTemperature(temperature);
    setScale('f');
  };

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fah = scale === 'c' ? tryConvert(temperature, toFah) : temperature;

  return (
    <div>
      <TemperatureInput scale={'c'} temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput scale={'f'} temperature={fah} onTemperatureChange={handleFahChange} />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

export default Converter;
