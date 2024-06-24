/** @format */

import { sequelizeConnection, DataTypes, ModelDefined } from "../config/db";
import { TodoAttributes, TodoCreationAttributes } from "../types";

const todo: ModelDefined<TodoAttributes, TodoCreationAttributes> =
  sequelizeConnection.define("todo", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  
export default todo;