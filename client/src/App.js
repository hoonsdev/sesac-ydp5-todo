import { useEffect, useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import axios from 'axios';

function App() {
  // console.log(process.env.REACT_APP_DB_HOST);
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get(`${process.env.REACT_APP_DB_HOST}/todos`);
      setTodoItems(res.data);
    };
    getTodos();
  }, []);

  const addItem = async (newItem) => {
    // newItem.id = todoItems.length + 1;
    // newItem.done = false;
    // setTodoItems([...todoItems, newItem]);
    const res = await axios.post(
      `${process.env.REACT_APP_DB_HOST}/todo`,
      newItem
    );
    console.log(res.data);
    setTodoItems([res.data, ...todoItems]);
  };
  const deleteItem = async (id) => {
    await axios.delete(`${process.env.REACT_APP_DB_HOST}/todo/${id}`);
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(newTodoItems);
  };
  const updateItem = async (targetItem) => {
    await axios.patch(
      `${process.env.REACT_APP_DB_HOST}/todo/${targetItem.id}`,
      targetItem
    );
  };
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
