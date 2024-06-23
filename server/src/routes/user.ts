import express, { Router } from "express";
import { register, login, logout } from "../controllers/user";

const userRouter: Router = express.Router();

userRouter.post("/register", register);

userRouter.post("/login", login);

userRouter.put("/logout", logout);

export default userRouter;