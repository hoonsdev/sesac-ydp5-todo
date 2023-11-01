import { useEffect, useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import axios from 'axios';
import TodoCount from './components/TodoCount';
import './styles/App.scss';

function App() {
  // console.log(process.env.REACT_APP_DB_HOST);
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get(`${process.env.REACT_APP_DB_HOST}/api/todos`);
      setTodoItems(res.data);
    };
    getTodos();
  }, []);

  const addItem = async (newItem) => {
    // newItem.id = todoItems.length + 1;
    // newItem.done = false;
    // setTodoItems([...todoItems, newItem]);
    const res = await axios.post(
      `${process.env.REACT_APP_DB_HOST}/api/todo`,
      newItem
    );
    console.log(res.data);
    setTodoItems([res.data, ...todoItems]);
  };
  const deleteItem = async (id) => {
    await axios.delete(`${process.env.REACT_APP_DB_HOST}/api/todo/${id}`);
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(newTodoItems);
  };
  const updateItem = async (targetItem) => {
    await axios.patch(
      `${process.env.REACT_APP_DB_HOST}/api/todo/${targetItem.id}`,
      targetItem
    );
  };
  return (
    <div className="App">
      <header>
        <h1>Todo</h1>
        <TodoCount count={todoItems.length} />
      </header>
      <main>
        <AddTodo addItem={addItem} />
        {todoItems.map((item) => {
          return (
            <Todo
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              updateItem={updateItem}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
