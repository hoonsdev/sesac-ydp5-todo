import React from 'react';

export default function Todo({ item, deleteItem }) {
  const { id, title, done } = item;

  const onDeleteButtonClick = () => {
    deleteItem(id);
  };
  return (
    <div>
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        defaultChecked={done}
      />
      <label htmlFor={`todo${id}`}>{title}</label>
      <button onClick={onDeleteButtonClick}>DELETE</button>
    </div>
  );
}
