import React, { useState } from 'react';
import './App.css';
import TodoCreateForm from './TodoCreateForm';
import TodoList from './TodoList';
import { v4 as uuid } from 'uuid';

const initialList = [
  {
    id: uuid(),
    title: 'first Todo',
    done: false,
  },
  {
    id: uuid(),
    title: 'second Todo',
    done: false,
  },
  {
    id: uuid(),
    title: 'third Todo',
    done: false,
  },
];

export default function App() {
  const [list, setList] = useState(initialList);

  const create = (newTitle) =>
    setList([...list, { id: uuid(), title: newTitle, done: false }]);

  return (
    <div className="App">
      <TodoCreateForm create={create} />
      <TodoList list={list} />
    </div>
  );
}
