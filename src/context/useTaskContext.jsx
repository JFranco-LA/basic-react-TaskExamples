import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/task";

export const taskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    confirm(`Deseas eliminar la tarea de id: ${id}`) &&
      setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <taskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </taskContext.Provider>
  );
};
