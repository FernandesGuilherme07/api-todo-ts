import { Router } from "express";
import {
  getAllTasks,
  findTaskById,
  createTask,
  updateTask,
  removeTask,
} from "../controllers/TaskController";

const router = Router();

export default router
  .post("/task", createTask)
  .get("/task", getAllTasks)
  .get("/task/:id", findTaskById)
  .put("/task/:id", updateTask)
  .delete("/task/:id", removeTask);
