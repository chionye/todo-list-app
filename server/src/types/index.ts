
import { Optional } from "sequelize";

export interface TodoAttributes {
  id: number;
  uid: number;
  title: string;
  description: string;
  category: string;
  completed: number;
  date: string;
  time: string;
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
  uid: string;
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
}

export interface CustomError extends Error {
  status?: number;
}