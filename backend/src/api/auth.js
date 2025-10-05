import { isAuth } from "../middlewares/isAuth.js";
import { userOut } from "../schemas/users.js";
import userService from "../services/users.js";
import { Router } from "express";

const router = Router();

router.post("/login", async (req, res, next) => {
  try {
    const data = await userService.login(req.body);
    res.created(data);
  } catch (error) {
    next(error);
  }
});

router.get("/me", isAuth, async (req, res, next) => {
  try {
    const data = await userService.getById(req.user.id, { select: userOut });
    res.created(data);
  } catch (error) {
    next(error);
  }
});

export default router;
