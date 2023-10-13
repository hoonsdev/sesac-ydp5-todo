import React from 'react';
import '../styles/TodoCount.scss';

export default function TodoCount({ count }) {
  return (
    <div className="todoCount">
      오늘의 할일 <b>{count}</b>개!
    </div>
  );
}
