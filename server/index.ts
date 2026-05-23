import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { prisma } from "./config/prisma.config";
import { logger } from "./config/logger.config";
import { JobQueue } from "./queues";
import { AgentRegistry } from "./agents/registry";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

const start = async (): Promise<void> => {
  try {
    await prisma.$connect();

    logger.success("Database connected successfully");

    await AgentRegistry.startAgents();

    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () => {
      logger.success(`Server running on port ${PORT}`);
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";

    logger.error(`Failed to start server: ${errorMessage}`);

    process.exit(1);
  }
};

const shutdown = async (): Promise<void> => {
  logger.info("Shutting down server...");

  try {
    await AgentRegistry.stopAgents();

    await JobQueue.closeAllQueues();

    logger.success("All queues closed");

    await prisma.$disconnect();

    logger.success("Database disconnected");

    process.exit(0);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";

    logger.error(`Error during shutdown: ${errorMessage}`);

    process.exit(1);
  }
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

start();
