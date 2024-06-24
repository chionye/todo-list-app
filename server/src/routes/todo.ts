import express, { Router } from "express";
import { findAll, create, update, unset } from "../controllers/todo";

const todoRouter: Router = express.Router();

todoRouter.get("/:id", findAll);

todoRouter.post("/", create);

todoRouter.put("/:id", update);

todoRouter.delete("/:id", unset);

export default todoRouter;