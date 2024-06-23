/** @format */

import jwt from "jsonwebtoken";
import { config } from "../config/constants";

const secret = config.secret || "defaultSecretKey";

export const generateToken = (userId: number): string => {
  return jwt.sign({ userId }, secret, { expiresIn: "1h" });
};