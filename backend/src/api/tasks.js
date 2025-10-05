import { isAuth } from "../middlewares/isAuth.js";
import taskService from "../services/tasks.js";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res, next) => {
  const { skip, limit, ...query } = req.query;

  try {
    const data = await taskService.tasksWithUser(
      Number(skip) || 0,
      Number(limit) || undefined,
      query
    );
    res.success(data);
  } catch (error) {
    next(error);
  }
});

router.post("/", isAuth, async (req, res, next) => {
  try {
    const data = await taskService.createTask(req.body);
    res.created(data);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", isAuth, async (req, res, next) => {
  try {
    const data = await taskService.getById(Number(req.params.id));
    res.success(data);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", isAuth, async (req, res, next) => {
  const { id, createdAt, ...updateData } = req.body;

  try {
    const data = await taskService.updateById(
      Number(req.params.id),
      updateData
    );
    res.accepted(data);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", isAuth, async (req, res, next) => {
  try {
    const data = await taskService.deleteById(Number(req.params.id));
    res.accepted(data);
  } catch (error) {
    next(error);
  }
});

export default router;
