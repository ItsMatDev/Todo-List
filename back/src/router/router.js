import { Router } from "express";

import taskController from "../controllers/taskController.js";

const router = Router();

router.get("/tasks", taskController.getAll);
router.post("/task", taskController.createOne);
router.delete("/task/:id", taskController.deleteOne);

export default router;
