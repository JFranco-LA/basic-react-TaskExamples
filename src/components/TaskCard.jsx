import { taskContext } from "../context/useTaskContext";
import { useContext } from "react";

const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(taskContext);

  return (
    <div className="bg-gray-800 text-white  p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-700 px-2 py-1 rounded-md mt-4 hover:bg-red-400 hover:text-black"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default TaskCard;
