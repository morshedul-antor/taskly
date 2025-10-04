import { badRequest, notFound } from "../error/error.js";
import taskRepo from "../repositories/tasks.js";
import userRepo from "../repositories/users.js";
import baseService from "./base.js";

const taskService = () => {
  const repo = taskRepo;
  const service = baseService("task");

  const createTask = async (data) => {
    const { title, dueDate, assignedUser, ...restData } = data;

    // validation
    if (!title) {
      throw badRequest("Title is required!");
    }
    if (!dueDate) {
      throw badRequest("Due date is required!");
    }
    if (!assignedUser) {
      throw badRequest("Assgined user is required!");
    }

    // check user
    const user = await userRepo.getById(assignedUser);
    if (!user) {
      throw notFound("Assigned user not found!");
    }

    // create task
    const task = await service.create({
      title,
      dueDate,
      assignedUser,
      ...restData,
    });

    return task;
  };

  const tasksWithUser = async (skip, limit, query) => {
    const { title, status, dueDate } = query;

    const where = {};
    if (title) where.title = { contains: title, mode: "insensitive" };
    if (status) where.status = status;
    if (dueDate) where.dueDate = new Date(dueDate);

    const data = await repo.tasksWithUser(skip, limit, where);

    if (!data) {
      return [];
    }
    return data;
  };

  return {
    ...service,
    createTask,
    tasksWithUser,
  };
};

export default taskService();
