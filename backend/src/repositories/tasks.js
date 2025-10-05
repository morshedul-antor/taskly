import { prisma } from "../config/database.js";
import { userInfoOut } from "../schemas/users.js";
import baseRepo from "./base.js";

const taskRepo = () => {
  const repo = baseRepo("task");

  const tasksWithUser = async ({ skip = 0, limit = undefined, where } = {}) => {
    return await prisma.task.findMany({
      where,
      include: {
        user: { select: userInfoOut },
      },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    });
  };

  return {
    ...repo,
    tasksWithUser,
  };
};

export default taskRepo();
