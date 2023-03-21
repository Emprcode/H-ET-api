import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import UserRouter from "./src/routers/UserRouter.js";
import { connectDB } from "./src/config/dbConfig.js";
import Transrouter from "./src/routers/TransRouter.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

//middleware

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//database

connectDB();

app.use("/api/v1/user", UserRouter);
app.use("/api/v1/transaction", Transrouter)

//uncaught error handler

app.use("*", (req, res, next) => {
  const error = {
    errorCode: 404,
    message: "404 Page not found",
  };
  next(error);
});

//global error handler

app.use((error, req, res, next) => {
  const statusCode = error.errorCode || 500;
  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server running at http://localhost:${PORT}`);
});
