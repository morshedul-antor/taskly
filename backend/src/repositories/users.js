import { userOut } from "../schemas/users.js";
import { prisma } from "../config/database.js";
import baseRepo from "./base.js";

const userRepo = () => {
  const repo = baseRepo("user");

  const getByEmail = async (email) => {
    return await repo.getByKey("email", email);
  };

  const getByIdWithTasks = async (userId) => {
    return await prisma.user.findUnique({
      where: { id: userId },
      select: { ...userOut, tasks: { orderBy: { createdAt: "desc" } } },
    });
  };

  return {
    ...repo,
    getByEmail,
    getByIdWithTasks,
  };
};

export default userRepo();
