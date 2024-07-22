import { useEffect, useState, useRef } from 'react';
import './CSS/Todo.css';
import { TodoItems } from './TodoItems';

export const Todo = () => {
  const countRef = useRef(0);
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    setTodos([...todos, { no: countRef.current++, text: inputRef.current.value, display: "" }]);
    inputRef.current.value = "";
    localStorage.setItem("todos_count", countRef.current);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) setTodos(storedTodos);
    const storedCount = localStorage.getItem("todos_count");
    if (storedCount) countRef.current = parseInt(storedCount, 10);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);

  return (
    <div className='todo'>
      <div className="todo-header">TO-DO List</div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder='Begin' className='todo-input' />
        <div onClick={add} className="todo-add-btn">ADD</div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => (
          <TodoItems key={index} no={item.no} setTodos={setTodos} display={item.display} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
