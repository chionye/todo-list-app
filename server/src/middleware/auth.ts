
import jwt from "jsonwebtoken";
import { config } from "../config/constants";
import { NextFunction, Request, Response } from "express";

const secret = config.secret;

const verifyToken = async (req: Request, res:Response, next: NextFunction) => {
  try {
    const token = req.headers["x-access-token"] as string;
    if (!token) {
      return res
        .status(403)
        .send({ message: "Please login to access the data" });
    }

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!",
        });
      }
      next();
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = verifyToken;
