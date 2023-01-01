import React from 'react';

function NumberList(props) {
  const { numbers } = props;

  const listItems = numbers.map((number, idx) => {
    return <li key={idx}>{number}</li>;
  });

  return <ul>{listItems}</ul>;
}

export default NumberList;
