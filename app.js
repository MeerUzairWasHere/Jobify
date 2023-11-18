import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());
dotenv.config();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.status(200).json({ msg: "hello world!" });
});
app.post("/", (req, res) => {
  res.status(200).json({ msg: req.body });
});

app.listen(process.env.PORT, () => {
  console.log("Server is listening to port " + process.env.PORT);
});
