import { prisma } from "../config/database.js";
import baseRepo from "./base.js";

const userRepo = () => {
  const repo = baseRepo("user");

  const getByEmail = async (email) => {
    return await prisma.user.findUnique({ where: { email } });
  };

  const getByIdWithTasks = async (userId) => {
    return await prisma.user.findUnique({
      where: { id: userId },
      include: { tasks: { orderBy: { createdAt: "desc" } } },
    });
  };

  return {
    ...repo,
    getByEmail,
    getByIdWithTasks,
  };
};

export default userRepo;
