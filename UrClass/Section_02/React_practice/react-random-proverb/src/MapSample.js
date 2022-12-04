import React from 'react';

const MapSample = () => {
  const names = ['snowman', 'ice', 'snow', 'wind'];

  const nameList = names.map((value, index, array) => {
    return <li>{value}</li>;
  });

  return <ul>{nameList}</ul>;
}

export default MapSample;