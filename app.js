//third party import
import * as dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import rateLimiter from "express-rate-limit";

// public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

//local import
//connect db
import connectDB from "./db/connect.js";

//error handlers
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

// auth middleware
import { authenticateUser } from "./middleware/authMiddleware.js";

//routes
import jobRouter from "./routes/jobRoutes.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import { StatusCodes } from "http-status-codes";

//applying thirdparty middlewares
const app = express();
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "./client/dist")));

//security packages
app.use(helmet());
app.use(mongoSanitize());
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 60,
  })
);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.get("/api/v1/health", (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "Server is running!" });
});
//applying local middlewares
app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

//handling errors
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

// Schedule health check
// cron.schedule("*/14 * * * *", async () => {
//   try {
//     const response = await axios.get(
//       `https://jobify-meeruzairwashere.onrender.com/api/v1/health`
//     );
//     console.log(`Health check successful: ${response.data.msg}`);
//   } catch (error) {
//     console.error(`Health check failed: ${error.message}`);
//   }
// });
