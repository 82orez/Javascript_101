import React from 'react';

function Book(props) {
  return (
    <div>
      <h1>This book is {props.name}.</h1>
      <h2>This book has {props.numOfPages}.</h2>
      <br/>
    </div>
  );
}

export default Book;