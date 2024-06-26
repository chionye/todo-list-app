import express, { Router } from "express";
import { register, login } from "../controllers/user";

const userRouter: Router = express.Router();

userRouter.post("/register", register);

userRouter.post("/login", login);

export default userRouter;