import express from "express";
import cors from "cors";
import TaskRoutes from "./routes/task.routes";
import "dotenv/config";
import morganMiddleware from "./middlewares/morganMiddleware";

const { APP_VERSION } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use(`${APP_VERSION}`, TaskRoutes);
app.use(morganMiddleware);

export default app;
