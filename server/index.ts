import express from "express";
import cors from "cors";
// import dotenv from "dotenv";
// import "./config/index";
import config from "./config/index";
import { logger } from "./config/logger.config";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
