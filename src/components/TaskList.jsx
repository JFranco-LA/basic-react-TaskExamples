import TaskCard from "./TaskCard";
import { taskContext } from "../context/useTaskContext";
import { useContext } from "react";

const TaskList = () => {
  const { tasks } = useContext(taskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-2xl font-bold text-center mt-3">No hay tareas aún.</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
