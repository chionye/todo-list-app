
import { Optional } from "sequelize";

export interface TodoAttributes {
  id: number;
  uid: number;
  title: string;
  description: number;
  category: string;
  completed: number;
  date: string;
  time: string;
}

export type TodoCreationAttributes = Optional<TodoAttributes, "id">;

export interface UserAttributes {
  id: number;
  email: string;
  password: string;
}

export type UserCreationAttributes = Optional<UserAttributes, "id">;