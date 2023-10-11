import { useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

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
  const addItem = (newItem) => {
    newItem.id = todoItems.length + 1;
    newItem.done = false;
    setTodoItems([...todoItems, newItem]);
  };
  const deleteItem = (id) => {
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(newTodoItems);
  };
  return (
    <div className="App">
      <AddTodo addItem={addItem} />
      {todoItems.map((item, idx) => {
        return <Todo key={item.id} item={item} deleteItem={deleteItem} />;
      })}
    </div>
  );
}

export default App;
