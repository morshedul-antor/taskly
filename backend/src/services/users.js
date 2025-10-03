import { badRequest, notFound } from "../error/error.js";
import { createHash } from "../utils/security.js";
import userRepo from "../repositories/users.js";
import baseService from "./base.js";

const userService = () => {
  const repo = userRepo();
  const service = baseService("user");

  const getByEmail = async (email) => {
    const emailData = await repo.getByEmail(email);

    if (!emailData) {
      throw notFound("User not found!");
    }
    return emailData;
  };

  const createUser = async (data) => {
    const { email, password, ...restData } = data;

    // email and password validation
    const existingUser = await repo.getByEmail(email);
    if (existingUser) {
      throw badRequest("Email already exists!");
    }
    if (!email || !password) {
      throw badRequest("Email and password are required!");
    }

    // hash password
    const hashedPassword = await createHash(password);

    // create user
    const user = await service.create({
      email,
      password: hashedPassword,
      ...restData,
    });

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  };

  const getUsers = async () => {
    return await repo.get({
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,
      },
    });
  };

  const getUserById = async (userId) => {
    const userData = await repo.getById(userId, {
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,
      },
    });

    if (!userData) {
      throw notFound("User not found!");
    }
    return userData;
  };

  const getByIdWithTasks = async (userId) => {
    const userDataWithTasks = await repo.getByIdWithTasks(userId);

    if (!userDataWithTasks) {
      throw notFound("User not found!");
    }
    return userDataWithTasks;
  };

  return {
    ...service,
    getByEmail,
    createUser,
    getUsers,
    getUserById,
    getByIdWithTasks,
  };
};

export default userService();
