import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task to the list
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), task, completed: false }]);
  };

  // Function to mark a task as completed
  const completeTask = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, completed: true } : task));
  };

  // Function to remove a task from the list
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TodoContext.Provider value={{ tasks, addTask, completeTask, removeTask }}>
      {children}
    </TodoContext.Provider>
  );
};
