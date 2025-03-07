import express, { json } from "express";
import router from "./index.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config();
app.use(cors());
app.use(json());

app.use("", router);

export default app;
