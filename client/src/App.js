import { useState } from 'react';
import Todo from './components/Todo';

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: 'my todo1',
      done: false,
    },
    {
      id: 2,
      title: 'my todo2',
      done: false,
    },
    {
      id: 3,
      title: 'my todo3',
      done: true,
    },
    {
      id: 4,
      title: '백엔드 프로젝트 완성해오기!!!',
      done: true,
    },
  ]);
  return (
    <div className="App">
      todo
      {todoItems.map((item) => {
        return <Todo key={item.id} item={item} />;
      })}
    </div>
  );
}

export default App;
