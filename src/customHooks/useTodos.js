import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import arrayMove from 'array-move';

export const useTodos = (initialTodos) => {
  const [list, setList] = useState(initialTodos);

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

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setList((items) => arrayMove(items, oldIndex, newIndex));
  };

  return { list, create, update, destroy, toggleDone, move, onSortEnd };
};
