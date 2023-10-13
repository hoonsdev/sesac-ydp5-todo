import React, { useState } from 'react';
import '../styles/AddTodo.scss';

export default function AddTodo({ addItem }) {
  const [todoItem, setTodoItem] = useState({
    title: '',
  });
  const onButtonClick = () => {
    addItem(todoItem);
    setTodoItem({ title: '' });
  };
  return (
    <div className="addTodo">
      <input
        type="text"
        placeholder="Add your new todo"
        value={todoItem.title}
        onChange={(e) => setTodoItem({ title: e.target.value })}
      />
      <button onClick={onButtonClick}>ADD</button>
    </div>
  );
}
