import React from 'react';
import Todo from './Todo';

export default function TodoList({ list, update, destroy, toggleDone, move }) {
  return (
    <ul>
      {list.map((todo, index, list) => (
        <Todo
          id={todo.id}
          key={todo.id}
          position={{ index, last: list.length - 1 }}
          title={todo.title}
          done={todo.done}
          update={update}
          destroy={destroy}
          toggleDone={toggleDone}
          move={move}
        />
      ))}
    </ul>
  );
}
