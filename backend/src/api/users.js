import { userOut } from "../schemas/users.js";
import userService from "../services/users.js";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const data = await userService.get({ select: userOut });
    res.success(data);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = await userService.createUser(req.body);
    res.created(data);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const data = await userService.getById(Number(req.params.id), {
      select: userOut,
    });
    res.success(data);
  } catch (error) {
    next(error);
  }
});

router.get("/user-by-id-with-tasks/:id", async (req, res, next) => {
  try {
    const data = await userService.getByIdWithTasks(Number(req.params.id));
    res.success(data);
  } catch (error) {
    next(error);
  }
});

export default router;
