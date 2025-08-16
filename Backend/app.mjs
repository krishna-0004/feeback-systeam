import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.mjs";

import apiRoutes from "./routes/api.mjs";
import authRoutes from "./routes/authRoutes.mjs";
import feedbackRoutes from "./routes/feedbackRoutes.mjs";
import hodRoutes from "./routes/hodRoutes.mjs";
import docxRoutes from "./routes/docxRoutes.mjs";

dotenv.config();

// Connect once per cold start
await connectDB();

const app = express();

// Allow local dev + your Vercel frontend domain
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://feeback-systeam.vercel.app/"
  ],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Health/root routes (avoid 404 on "/")
app.get("/", (req, res) => res.send("Backend is running 🚀"));
app.get("/api/health", (req, res) => res.json({ ok: true }));

// Your routes
app.use("/api", apiRoutes);
app.use("/auth", authRoutes);
app.use("/feedback", feedbackRoutes);
app.use("/hod", hodRoutes);
app.use("/report", docxRoutes);

export default app;
