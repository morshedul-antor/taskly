import { Router } from "express";
import authRouter from "../api/auth.js";
import userRouter from "../api/users.js";
import taskRouter from "../api/tasks.js";

const router = Router();

router.use("", authRouter);
router.use("/users", userRouter);
router.use("/tasks", taskRouter);

export default router;
