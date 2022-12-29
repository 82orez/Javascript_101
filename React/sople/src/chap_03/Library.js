import React from 'react';
import Book from './Book';

function Library(props) {
  return (
    <div>
      <Book name={'Python'} numOfPages={123} />
      <Book name={'Java'} numOfPages={456} />
      <Book name={'Javascript'} numOfPages={789} />
    </div>
  );
}

export default Library;