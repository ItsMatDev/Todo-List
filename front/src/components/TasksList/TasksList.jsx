import { useEffect } from "react";
import "./TasksList.scss";
import { useDispatch, useSelector } from "react-redux";
import { endTaskAsync, fetchTasks } from "../../redux/tasks/thunks";
import TaskItem from "../TaskItem/TaskItem";

function TasksList() {
  const tasks = useSelector((state) => state.todo.tasks);
  const loading = useSelector((state) => state.todo.loading);
  const error = useSelector((state) => state.todo.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks);
  }, [dispatch]);

  const handleTaskCompletion = (taskId) => {
    dispatch(endTaskAsync(taskId));
  };

  return (
    tasks.length > 0 && (
      <section className="tasksList">
        <h2>Liste des taches :</h2>
        {loading && <p>Loading...</p>}
        {!loading && error && <p>Error: {error}</p>}
        {!loading && !error && (
          <ul>
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} onComplete={handleTaskCompletion} />
            ))}
          </ul>
        )}
      </section>
    )
  );
}

export default TasksList;
