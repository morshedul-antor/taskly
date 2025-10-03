import dotenv from "dotenv";
dotenv.config();

const config = {
  port: process.env.PORT || 8080,
  databaseUrl: process.env.DATABASE_URL,
  env: process.env.ENV || "dev",

  algorithm: process.env.ALGORITHM,
  jwtSecret: process.env.JWT_SECRET,
};

export default config;
