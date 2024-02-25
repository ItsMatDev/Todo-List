const { Router } = require("express");

const taskController = require("../controllers/taskController.js");
const validateTask = require("../middlewares/taskValidationSchema.js");

const router = Router();

router.get("/tasks", taskController.getAll);
router.post("/tasks", validateTask, taskController.createOne);
router.delete("/tasks/:id", taskController.deleteOne);

module.exports = router;
