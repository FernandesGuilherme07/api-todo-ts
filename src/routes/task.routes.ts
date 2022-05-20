import { Router } from "express";
import {
  getAllTasks,
  findTaskById,
  createTask,
  updateTask,
  removeTask,
} from "../controllers/TaskController";
import { validate } from "../middlewares/validationMiddleware";

const router = Router();

export default router
  .post("/task", validate, createTask)
  .get("/task", validate, getAllTasks)
  .get("/task/:id", validate, findTaskById)
  .put("/task/:id", validate, updateTask)
  .delete("/task/:id", validate, removeTask);
