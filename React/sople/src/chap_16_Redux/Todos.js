import React from 'react';

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <div>
      <input type={'checkbox'}/>
      <span>Example Text</span>
      <button>Del</button>
    </div>
  );
}

const Todos = ({input, todos, onChangeInput, onInsert, onToggle, onRemove}) => {
  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input/>
        <button type={'submit'}>Register</button>
      </form>
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}

export default Todos;