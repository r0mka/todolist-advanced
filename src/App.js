import React, { useState } from 'react';
import './App.css';
import './TodoList.css';
import TodoCreateForm from './TodoCreateForm';
import TodoList from './TodoList';
import Particles from 'react-particles-js';
import { simple } from './particlesJsParams';
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
    done: true,
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
    const updatedList = list.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    setList(updatedList);
  };

  const destroy = (id) => setList(list.filter((todo) => todo.id !== id));

  const toggleDone = (id) => {
    const updatedList = list.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setList(updatedList);
  };

  const move = (id, direction) => {
    // move list item
    const directions = {
      up: -1,
      down: 1,
    };
    // find index of the element that we clicked on
    const index1 = list.findIndex((todo) => todo.id === id);
    // find index of the other element we need to swap the first element with
    const index2 = index1 + directions[direction];
    // copy list array
    const updatedList = [...list];

    // swap positions of the 2 elements in the array
    let temp = updatedList[index1];
    updatedList[index1] = updatedList[index2];
    updatedList[index2] = temp;

    setList(updatedList);
  };

  return (
    <div className="TodoList">
      <Particles
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100vw',
        }}
        params={simple}
      />
      <h1>TodoList</h1>

      <TodoCreateForm create={create} />
      <TodoList
        list={list}
        update={update}
        destroy={destroy}
        toggleDone={toggleDone}
        move={move}
      />
    </div>
  );
}
