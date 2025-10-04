import { badRequest, notFound } from "../error/error.js";
import { createHash } from "../utils/security.js";
import userRepo from "../repositories/users.js";
import baseService from "./base.js";

const userService = () => {
  const repo = userRepo;
  const service = baseService("user");

  const createUser = async (data) => {
    const { name, email, password, ...restData } = data;

    // validation
    if (!name) {
      throw badRequest("Name is required!");
    }
    if (!email) {
      throw badRequest("Email is required!");
    }
    if (!password) {
      throw badRequest("Password is required!");
    }

    // existing email check
    const existingUser = await repo.getByEmail(email);
    if (existingUser) {
      throw badRequest("Email already exists!");
    }

    // hash password
    const hashedPassword = await createHash(password);

    // create user
    const user = await service.create({
      name,
      email,
      password: hashedPassword,
      ...restData,
    });

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
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
    createUser,
    getByIdWithTasks,
  };
};

export default userService();
