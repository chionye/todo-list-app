
import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import userRouter from "./routes/user";
import todoRouter from "./routes/todo";

const app: Express = express();
const port = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 10000,
});

app.use(limiter);

app.use(helmet());

app.use(morgan("dev"));

app.use(
  express.json({
    limit: "200mb",
  })
);

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, the application works");
});

app.use("/api/v1/user", userRouter);

app.use("/api/v1/todo", todoRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
