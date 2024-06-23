/** @format */

import { user, todo } from "../models";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config/constants";
import { customResponse } from "../utils/helpers";
import { AuthPayload } from "../types";

const { secret } = config;

export const register = async (req: Request, res: Response) => {
  const payload: AuthPayload = req.body;
  if (!payload.email || !payload.password) {
    return customResponse(400, res, "Content can not be empty!");
  }

  try {
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    const data = { email: payload.email, password: hashedPassword };

    const response = await user.create(data);
    return customResponse(
      201,
      res,
      "User registration successful",
      true,
      response
    );
  } catch (err: any) {
    return customResponse(500, res, `Error: ${err.message}`);
  }
};

export const login = async (req: Request, res: Response) => {
  const payload: AuthPayload = req.body;
  if (!payload.email || !payload.password) {
    return customResponse(400, res, "Content can not be empty!");
  }

  try {
    const response = await user.findOne({
      include: todo,
      where: { email: payload.email },
      order: [[todo, "id", "DESC"]],
    });

    if (response) {
      const values: Record<string, any> = response.dataValues;
      const comparePass = await bcrypt.compare(
        payload.password,
        values.password
      );
      if (comparePass) {
        const token = jwt.sign({ id: values.id }, secret, { expiresIn: "1d" });
        values.accessToken = token;
        const { password, ...responseValues } = values;
        return customResponse(
          201,
          res,
          "User logged in successfully",
          true,
          responseValues
        );
      } else {
        return customResponse(401, res, "Authentication failed");
      }
    } else {
      return customResponse(404, res, "Record not found");
    }
  } catch (err: any) {
    return customResponse(500, res, `Error: ${err.message}`);
  }
};