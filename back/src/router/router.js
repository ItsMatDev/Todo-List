import { Router } from "express";

import taskController from "../controllers/taskController.js";
import validateTask from "../middlewares/taskValidationSchema.js";

const router = Router();

router.get("/tasks", taskController.getAll);
router.post("/tasks", validateTask, taskController.createOne);
router.delete("/tasks/:id", taskController.deleteOne);

export default router;
