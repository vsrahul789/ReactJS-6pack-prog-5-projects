import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import registerRouter from "./routes/users";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("Connected to MongoDB");
});

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/api/test", (req: Request, res: Response) => {
  res.json("Hello World");
});
app.use("/api/users", registerRouter);

// const PORT = process.env.PORT || 3500;

app.listen(3500, () => {
  console.log(`Server is running on port 3500`);
});
