import React, { useContext } from 'react';
import { TodoContext } from './context/TodoContext';

const TodoList = () => {
  const { tasks, addTask, completeTask, removeTask } = useContext(TodoContext);

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = e.target.task.value;
    if (newTask.trim() !== '') {
      addTask(newTask);
      e.target.reset();
    }
  };

  return (
    <div className="todo-list">
      <h2>To-Do List</h2>
      <form onSubmit={handleAddTask}>
        <input type="text" name="task" placeholder="Add new task" required />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => completeTask(task.id)}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.task}
              </span>
            </label>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed Tasks: {tasks.filter((task) => task.completed).length}</p>
    </div>
  );
};

export default TodoList;
