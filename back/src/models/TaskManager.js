import Task from "./Task.js";

const getAllTasks = async () => {
  try {
    const tasks = await Task.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return tasks;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createTask = async (taskData) => {
  try {
    const task = await Task.create(taskData);
    const createdTask = {
      id: task.id,
      text: task.text,
    };
    return createdTask;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteTask = async (taskId) => {
  try {
    const rowsDeleted = await Task.destroy({
      where: {
        id: taskId,
      },
    });
    return rowsDeleted;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getAllTasks, createTask, deleteTask };
