import { successHandler } from "./middlewares/successHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import routerV1 from "./routers/v1.js";
import express from "express";
const app = express();

app.use(express.json());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(successHandler);

// API routes
app.use("/api/v1", routerV1);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Nodejs!");
});

export default app;
