import Task from "../models/taskModel.js";
import taskValidation from "../validation/taskValidation.js";

const getAll = (req, res) => {
  Task.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((tasks) => res.status(200).json(tasks))
    .catch((err) => res.status(500).json(err));
};

const createOne = (req, res) => {
  const { body } = req;
  const { error } = taskValidation(body);
  if (error) {
    return res.status(401).json(error.details[0].message);
  }
  Task.create({ ...body })
    .then((task) => {
      const createdTask = {
        id: task.id,
        text: task.text,
      };
      res.status(201).json(createdTask);
    })
    .catch((err) => res.status(500).json(err));
};

const deleteOne = (req, res) => {
  const { id } = req.params;
  Task.destroy({
    where: {
      id: id,
    },
  })
    .then((rowsDeleted) => {
      if (rowsDeleted === 0) {
        return res.status(404).json({ msg: "Not Found" });
      }
      res.status(200).json({ msg: "Task deleted" });
    })
    .catch((err) => res.status(500).json(err));
};

export default { getAll, createOne, deleteOne };
