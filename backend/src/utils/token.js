import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const createToken = async (id, time) => {
  const token = jwt.sign({ sid: id }, config.jwtSecret, {
    algorithm: config.algorithm,
    expiresIn: time || "24h",
  });

  return { token: token, type: "bearer" };
};

export const validateToken = (token) => {
  try {
    const decoded = jwt.verify(token, config.jwtSecret, {
      algorithms: [config.algorithm],
    });

    const userId = decoded.sid;
    return userId;
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      throw new Error("Token expired!");
    } else if (error.name === "JsonWebTokenError") {
      throw new Error("Invalid token!");
    } else {
      throw new Error("Token validation failed!");
    }
  }
};
