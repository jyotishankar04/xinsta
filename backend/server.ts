import express from "express";
import cors from "cors";

import { _config } from "./config/envConfig";

/// Routes
import clientRouter from "./src/client/index.routes";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = _config.PORT || 3000;

app.get("/health-check", (req, res) => {
  res.send("Server is healthy!");
});
app.use("/api/v1/", clientRouter);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
