import express from "express";
import cors from "cors";

import { _config } from "./config/envConfig";

/// Routes
import clientRouter from "./src/client/index.routes";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import cookieParser from "cookie-parser";
import { sendEmail } from "./config/mailtrap.config";
import { getVerificationCodeTemplate } from "./constants/email.template";

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = _config.PORT || 3000;

const codehtml = getVerificationCodeTemplate("756041");
// sendEmail({
//   to: ["patrajyotishankar@gmail.com"],
//   subject: "Verification Email",
//   html: codehtml,
//   category: "Integration Test",
// });

app.get("/health-check", (req, res) => {
  res.send("Server is healthy!");
});
app.use("/api/v1/", clientRouter);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
