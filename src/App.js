import React, { useState } from 'react';
import './App.css';
import TodoCreateForm from './TodoCreateForm';
import TodoList from './TodoList';
import { v4 as uuid } from 'uuid';

const initialList = [
  {
    id: uuid(),
    title: 'Learn JavaScript',
    done: false,
  },
  {
    id: uuid(),
    title: 'Learn React',
    done: false,
  },
  {
    id: uuid(),
    title: 'Get a job',
    done: false,
  },
];

export default function App() {
  const [list, setList] = useState(initialList);

  const create = (newTitle) =>
    setList([...list, { id: uuid(), title: newTitle, done: false }]);

  const update = (id, newTitle) => {
    console.log(id, newTitle);
    const updatedList = list.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    setList(updatedList);
  };

  const destroy = (id) => setList(list.filter((todo) => todo.id !== id));

  return (
    <div className="App">
      <TodoCreateForm create={create} />
      <TodoList list={list} update={update} destroy={destroy} />
    </div>
  );
}
