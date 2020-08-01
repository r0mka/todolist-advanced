import React, { useState } from 'react';

export default function Todo({ id, title, update, destroy }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(title);

  const saveTodo = (e) => {
    e.preventDefault();
    update(id, inputValue);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <form onSubmit={saveTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Save</button>
      </form>
    );
  }

  return (
    <li>
      {title}
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => destroy(id)}>Delete</button>
    </li>
  );
}
