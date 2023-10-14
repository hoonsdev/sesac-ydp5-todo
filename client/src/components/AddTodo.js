import React, { useState } from 'react';
import '../styles/AddTodo.scss';
import { CiSquarePlus } from 'react-icons/ci';

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
        onKeyDown={(e) => {
          if (e.nativeEvent.isComposing) {
            return;
          }

          if (e.key === 'Enter') {
            addItem(todoItem);
            setTodoItem({ title: '' });
          }
        }}
      />
      <button onClick={onButtonClick}>
        <CiSquarePlus />
      </button>
    </div>
  );
}
