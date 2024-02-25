const { getAllTasks, deleteTask, createTask } = require("../models/TaskManager.js");

const getAll = async (req, res) => {
  try {
    const tasks = await getAllTasks();
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createOne = async (req, res) => {
  const { body } = req;
  try {
    const createdTask = await createTask(body);
    return res.status(201).json(createdTask);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const rowsDeleted = await deleteTask(id);
    if (rowsDeleted === 0) {
      return res.status(404).json({ msg: "Not Found" });
    }
    return res.status(200).json({ msg: "Task deleted" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getAll, createOne, deleteOne };
