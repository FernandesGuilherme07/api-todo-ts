import { model, Schema } from "mongoose";

const TaskSchema = new Schema(
  {
    name: { type: String },
    description: { type: String || undefined },
    difficulty: { type: String },
    state: { type: String },
  },
  {
    timestamps: true,
  }
);

export const TaskModel = model("Task", TaskSchema);
