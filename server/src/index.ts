import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { plannerRouter } from "./routes/plan";
import { profileRouter } from "./routes/profile";

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT as string, 10) || 3001;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//api routes
app.use("/api/plan", plannerRouter);
app.use("/api/profile", profileRouter);

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
