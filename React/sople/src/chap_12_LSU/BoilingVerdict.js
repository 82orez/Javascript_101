import React, {useState} from 'react';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>Boiling!!</p>;
  }
  return <p>Not boiling!</p>;
}

export default BoilingVerdict;