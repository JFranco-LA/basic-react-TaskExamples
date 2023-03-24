import { useContext, useState } from "react";
import { taskContext } from "../context/useTaskContext";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { addTask, tasks } = useContext(taskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: tasks.length + 1,
      title,
      description,
    };

    addTask(newTask);

    setTitle("");
    setDescription("");
  };

  return (
  <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 mb-4 p-10">
        <h1 className="text-2xl font-bold mb-3 text-white">Crea tu tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        className="bg-slate-300 p-3 w-full mb-2"
        />
      <textarea
        placeholder="Descripción de tu tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="bg-slate-300 p-3 w-full mb-2"
      ></textarea>
      <button className="bg-indigo-600 px-3 py-1 text-white">Guardar</button>
    </form>
  </div>
  );
};

export default TaskForm;
