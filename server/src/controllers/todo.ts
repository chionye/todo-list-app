/** @format */

import todo from "../models/todo";
import { Request, Response } from "express";
import { customResponse } from "../utils/helpers";
import { TodoPayload } from "../types";

export const create = async (req: Request, res: Response) => {
  const payload: TodoPayload = req.body;
  if (!payload.title) {
    return customResponse(400, res, "Content can not be empty!");
  }

  try {
    const data = {
      userId: parseInt(payload.userId),
      title: payload.title,
    };

    const response = await todo.create(data);
    return customResponse(201, res, "Task added successfully", true, response);
  } catch (err: any) {
    return customResponse(500, res, `Error: ${err.message}`);
  }
};

export const findAll = async (req: Request, res: Response) => {
  const id = req.params.id;
  const condition = { uid: id };

  try {
    const data = await todo.findAll({
      where: condition,
      order: [["id", "DESC"]],
    });
    return customResponse(200, res, "Tasks found successfully", true, data);
  } catch (err: any) {
    return customResponse(500, res, `Error: ${err.message}`);
  }
};

export const findOne = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const data = await todo.findByPk(id);
    if (data) {
      return res.status(200).send(data);
    } else {
      return res.status(404).send({ message: "Record not found" });
    }
  } catch (err: any) {
    return customResponse(500, res, `Error: ${err.message}`);
  }
};

export const update = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const [updated] = await todo.update(req.body, { where: { id: id } });
    if (updated) {
      return customResponse(200, res, "Task updated successfully");
    } else {
      return customResponse(400, res, "Update failed, please try again later.");
    }
  } catch (err: any) {
    return customResponse(500, res, `Error: ${err.message}`);
  }
};

export const unset = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const deleted = await todo.destroy({ where: { id: id } });
    if (deleted) {
      return customResponse(200, res, "Task deleted successfully");
    } else {
      return customResponse(
        400,
        res,
        "Task failed to delete, please try again later."
      );
    }
  } catch (err: any) {
    return customResponse(500, res, `Error: ${err.message}`);
  }
};