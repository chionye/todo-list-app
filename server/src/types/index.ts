
import { Optional } from "sequelize";

export interface TodoAttributes {
  id: number;
  userId: number;
  title: string;
  completed: number;
}

export type TodoCreationAttributes = Optional<TodoAttributes, "id" | "completed">;

export interface UserAttributes {
  id: number;
  email: string;
  password: string;
}

export type UserCreationAttributes = Optional<UserAttributes, "id">;

export interface AuthPayload {
  email: string;
  password: string;
}

export interface TodoPayload {
  userId: string;
  title: string;
}

export interface CustomError extends Error {
  status?: number;
}