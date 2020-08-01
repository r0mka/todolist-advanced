import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
  return (
    <ul style={{ listStyle: 'none' }}>
      {props.list.map((el) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );
}
