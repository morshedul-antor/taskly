import userRepo from "../repositories/users.js";
import { unauthorized } from "../error/error.js";
import { validateToken } from "../utils/token.js";

export const isAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers?.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw unauthorized("Not authenticated!");
    }
    const token = authHeader.split(" ")[1];

    const userId = await validateToken(token);
    const user = await userRepo.getById(userId);

    if (!user) {
      throw unauthorized("Invalid authentication!");
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
