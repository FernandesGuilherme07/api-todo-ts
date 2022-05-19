import { model, Schema } from "mongoose";

const TaskSchema = new Schema(
  {
    name: { type: String },
    description: { type: String || null },
    difficulty: { type: String },
  },
  {
    timestamps: true,
  }
);

export const TaskModel = model("Task", TaskSchema);
