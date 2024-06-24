/** @format */

import user from "./user";
import todo from "./todo";
import { sequelizeConnection } from "../config/db";

user.hasMany(todo, { foreignKey: "userId", sourceKey: "id" });
todo.belongsTo(user, { foreignKey: "userId", targetKey: "id" });

sequelizeConnection
  .sync()
  .then(() => {
    console.log("Synced successfully");
  })
  .catch((err) => {
    console.log(err);
  });

export { user, todo };
