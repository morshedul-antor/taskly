import { Router } from "express";
import userRouter from "../api/users.js";

const router = Router();

router.use("/users", userRouter);

export default router;
