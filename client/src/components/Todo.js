import React, { useState } from 'react';
import '../styles/Todo.scss';
import { RiDeleteBin6Line } from 'react-icons/ri';

export default function Todo({ item, deleteItem, updateItem }) {
  const [todoItem, setTodoItem] = useState(item);
  const { id, title, done } = todoItem;
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteButtonClick = () => {
    deleteItem(id);
  };

  // title 클릭하면 readOnly를 false로 변경 (수정 가능하도록!!)
  const offReadOnlyMode = () => {
    setReadOnly(false);
  };

  // title 수정
  const editEventHandler = (e) => {
    const { title, ...rest } = todoItem;
    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };

  // Enter 키 누르면 readOnly를 true로 변경
  const editKeyEventHandler = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }

    if (e.key === 'Enter') {
      setReadOnly(true);
      updateItem(todoItem);
    }
  };

  // checkbox 상태 업데이트
  const checkboxEventHandler = (e) => {
    const { done, ...rest } = todoItem;
    const updatedItem = {
      done: e.target.checked,
      ...rest,
    };
    setTodoItem(updatedItem);
    updateItem(updatedItem);
  };

  return (
    <div className="todo">
      <input
        className="checkbox"
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        defaultChecked={done}
        onChange={checkboxEventHandler}
      />
      <label htmlFor={`todo${id}`}></label>

      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input
        className="text"
        type="text"
        value={title}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={editKeyEventHandler}
      />
      <button onClick={onDeleteButtonClick}>
        <RiDeleteBin6Line />
      </button>
    </div>
  );
}
