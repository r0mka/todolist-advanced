import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function TodoCreateForm(props) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => setInputValue(e.target.value);

  const handleSumbit = (e) => {
    e.preventDefault();
    props.create(inputValue);
    setInputValue('');
  };
  return (
    <form onSubmit={handleSumbit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Create</button>
    </form>
  );
}
