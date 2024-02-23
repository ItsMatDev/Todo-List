import { useEffect, useState } from "react";
import { endTaskAsync, fetchTasks } from "../../redux";
import "./TasksList.scss";
import { useDispatch, useSelector } from "react-redux";

function TasksList() {
  const tasks = useSelector((state) => state.todo.tasks);
  const loading = useSelector((state) => state.todo.loading);
  const error = useSelector((state) => state.todo.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    tasks.length > 0 && (
      <section className="tasksList">
        <h2>Liste des taches :</h2>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                - {task.text}
                <button type="button" onClick={() => dispatch(endTaskAsync(task.id))}>
                  Terminer
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    )
  );
}

export default TasksList;
