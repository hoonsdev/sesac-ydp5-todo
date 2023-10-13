import React, { useState } from 'react';

export default function Todo({ item, deleteItem }) {
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
    }
  };

  // checkbox 상태 업데이트
  const checkboxEventHandler = (e) => {
    setTodoItem({ ...todoItem, done: e.target.checked });
  };

  return (
    <div>
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        defaultChecked={done}
        onChange={checkboxEventHandler}
      />
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input
        type="text"
        value={title}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={editKeyEventHandler}
      />
      <button onClick={onDeleteButtonClick}>DELETE</button>
    </div>
  );
}
