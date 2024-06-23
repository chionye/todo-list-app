
import dotenv from "dotenv";
dotenv.config();

const { PORT, DB_HOST, DB_USER, DB_PASS, DB_NAME, SECRET } = process.env;

export const config = {
  port: PORT,
  secret: SECRET || "defaultSecretKey",
  db: {
    host: DB_HOST,
    name: DB_NAME as string,
    user: DB_USER as string,
    password: DB_PASS as string,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
