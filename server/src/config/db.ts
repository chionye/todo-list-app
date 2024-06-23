/** @format */

import { Sequelize, DataTypes, ModelDefined } from "sequelize";
import { config } from "./constants";

const { host, user, password, database } = config.db;

const sequelizeConnection = new Sequelize(database, user, password, {
  host: host,
  dialect: "mysql"
})

export { sequelizeConnection, DataTypes, ModelDefined };