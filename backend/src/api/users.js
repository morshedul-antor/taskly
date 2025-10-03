import userService from "../services/users.js";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const data = await userService.getUsers();
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
    const data = await userService.getUserById(Number(req.params.id));
    res.success(data);
  } catch (error) {
    next(error);
  }
});

export default router;
