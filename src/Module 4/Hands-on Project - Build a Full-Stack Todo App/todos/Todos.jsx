import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './todosSlice';

const Todos = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map(({ id, text, completed }) => (
          <li key={id}>
            <span
              onClick={() => dispatch(toggleTodo(id))}
              style={{ textDecoration: completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {text}
            </span>
            <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;