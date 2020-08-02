import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import './TodoList.css';
import arrayMove from 'array-move';
import Todo from './Todo';
import TodoCreateForm from './TodoCreateForm';
import { v4 as uuid } from 'uuid';
import { useTodos } from '../customHooks/useTodos';
import { initialList } from '../data/initialList';

export default function TodoList() {
  const { list, create, update, destroy, toggleDone, move } = useTodos(
    initialList
  );

  const todos = list.map((todo, index, list) => (
    <Todo
      id={todo.id}
      // key={todo.id}
      position={{ index, last: list.length - 1 }}
      title={todo.title}
      done={todo.done}
      update={update}
      destroy={destroy}
      toggleDone={toggleDone}
      move={move}
    />
  ));

  return (
    <div className="TodoList">
      <h1>TodoList</h1>
      <TodoCreateForm create={create} />
      <ul className="TodoList">{todos}</ul>
    </div>
  );
}
