import React from 'react';
import Todo from './Todo';

export default function TodoList({ list, update, destroy }) {
  return (
    <ul style={{ listStyle: 'none' }}>
      {list.map((todo) => (
        <Todo
          id={todo.id}
          key={todo.id}
          title={todo.title}
          update={update}
          destroy={destroy}
        />
      ))}
    </ul>
  );
}
