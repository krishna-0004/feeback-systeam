import express from "express";
import { getTeacherFeedbackDOCX } from "../controllers/docxController.mjs";

const router = express.Router();

router.get("/docx", getTeacherFeedbackDOCX);

export default router;
