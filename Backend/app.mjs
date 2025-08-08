import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.mjs";
import apiRoutes from "./routes/api.mjs";
import authRoutes from "./routes/authRoutes.mjs";
import feedbackRoutes from "./routes/feedbackRoutes.mjs";
import hodRoutes from "./routes/hodRoutes.mjs";
import docxRoutes from "./routes/docxRoutes.mjs"; // ✅ Import DOCX routes

dotenv.config();
connectDB();

const app = express();

// ✅ Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Routes
app.use("/api", apiRoutes);
app.use("/auth", authRoutes);
app.use("/feedback", feedbackRoutes);
app.use("/hod", hodRoutes);
app.use("/report", docxRoutes); // ✅ Corrected mounting path

export default app;
