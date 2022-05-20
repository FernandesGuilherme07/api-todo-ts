import { Request, Response } from "express";

// Model
import { TaskModel } from "../models/Task";

// Logger
import Logger from "../../config/logger";

export async function createTask(req: Request, res: Response) {
  try {
    const data = req.body;
    const task = await TaskModel.create(data);
    return res.status(201).json(task);
  } catch (e: any) {
    Logger.info(`Error: ${e.message}`);
  }
}

export async function findTaskById(req: Request, res: Response) {
  try {
    const id = req.params._id;
    const task = await TaskModel.findById(id);

    if (!task) {
      return res.status(404).json({ error: "task does not exist." });
    }

    return res.status(200).json(task);
  } catch (e: any) {
    Logger.info(`Error: ${e.message}`);
  }
}

export async function getAllTasks(req: Request, res: Response) {
  try {
    const tasks = await TaskModel.find();
    return res.status(200).json(tasks);
  } catch (e: any) {
    Logger.info(`Error: ${e.message}`);
  }
}

export async function removeTask(req: Request, res: Response) {
  try {
    const id = req.params._id;
    const task = await TaskModel.findById(id);

    if (!task) {
      return res.status(404).json({ error: "task does not exist." });
    }

    console.log(task);

    await task.delete();

    return res.status(201).json({ msg: "task successfully removed!" });
  } catch (e: any) {
    Logger.info(`Error: ${e.message}`);
  }
}

export async function updateTask(req: Request, res: Response) {
  try {
    const id = req.params._id;
    const data = req.body;
    const task = await TaskModel.findById(id);

    if (!task) {
      return res.status(404).json({ error: "task does not exist." });
    }

    await TaskModel.updateOne({ _id: id }, data);

    return res.status(200).json(data);
  } catch (e: any) {
    Logger.info(`Error: ${e.message}`);
  }
}
