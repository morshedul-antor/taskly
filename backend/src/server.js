// server.js
import { connectDB, disconnectDB } from "./config/database.js";
import config from "./config/config.js";
import app from "./app.js";

const PORT = config.port;

const startServer = async () => {
  try {
    await connectDB();

    // start the server
    const server = app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

    const shutdown = async () => {
      console.log("Shutting down server...");
      await disconnectDB();
      server.close(() => {
        console.log("Server closed!");
        process.exit(0);
      });
    };

    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
