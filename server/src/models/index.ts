/** @format */

import user from "./users";
import todo from "./todo";
import { sequelizeConnection } from "../config/db";

user.hasMany(todo, { foreignKey: "uid", sourceKey: "id" });
todo.belongsTo(user, { foreignKey: "uid", targetKey: "id" });

sequelizeConnection
  .sync()
  .then(() => {
    console.log("Synced successfully");
  })
  .catch((err) => {
    console.log(err);
  });

export { user, todo };
