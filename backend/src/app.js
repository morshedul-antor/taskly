import { successHandler } from "./middlewares/successHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import routerV1 from "./routers/v1.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(successHandler);

// routes
app.use("/api/v1", routerV1);

// root api
app.get("/", (req, res) => {
  res.send("Nodejs!");
});

// undefined routes
app.use((req, res) => {
  res.status(404).json({
    status: "Failed",
    message: `Route [${req.originalUrl}] not found!`,
  });
});

// error handler
app.use(errorHandler);

export default app;
