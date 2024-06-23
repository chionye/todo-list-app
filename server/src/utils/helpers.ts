/** @format */

import jwt from "jsonwebtoken";
import { config } from "../config/constants";
import { Response } from "express";

const secret = config.secret;

export const generateToken = (userId: number): string => {
  return jwt.sign({ userId }, secret, { expiresIn: "1h" });
};

export const customResponse = (
  status: number,
  res: Response,
  message: string = "",
  success: boolean = false,
  data?: any
) => {
  const response = {
    status,
    success,
    message,
    data,
  };

  return res.status(200).json(response);
};