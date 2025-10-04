import taskService from "../services/tasks.js";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res, next) => {
  const skip = req.query.skip && Number(req.query.skip);
  const limit = req.query.limit && Number(req.query.limit);

  try {
    const data = await taskService.get({ skip, limit });
    res.success(data);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = await taskService.createTask(req.body);
    res.created(data);
  } catch (error) {
    next(error);
  }
});

router.get("/tasks-with-user/", async (req, res, next) => {
  const skip = req.query.skip && Number(req.query.skip);
  const limit = req.query.limit && Number(req.query.limit);

  try {
    const data = await taskService.tasksWithUser(skip, limit);
    res.success(data);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const data = await taskService.getById(Number(req.params.id));
    res.success(data);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
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

router.delete("/:id", async (req, res, next) => {
  try {
    const data = await taskService.deleteById(Number(req.params.id));
    res.accepted(data);
  } catch (error) {
    next(error);
  }
});

export default router;
