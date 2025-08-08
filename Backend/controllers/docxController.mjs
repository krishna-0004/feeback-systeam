import { generateFeedbackDocx } from "../utils/docxGenerator.mjs";
import Teacher from "../models/Teacher.mjs";
import Feedback from "../models/Feedback.mjs";

export async function getTeacherFeedbackDOCX(req, res) {
    try {
        const { teacher } = req.query;
        if (!teacher) {
            return res.status(400).json({ error: "Teacher ID is required." });
        }

        console.log(`Fetching feedback for Teacher ID: ${teacher}`);

        const teacherData = await Teacher.findById(teacher);
        if (!teacherData) {
            return res.status(404).json({ error: "Teacher not found." });
        }

        const feedbackData = await Feedback.find({ teacher }).populate("class");
        if (!feedbackData || feedbackData.length === 0) {
            return res.status(404).json({ error: "No feedback found for this teacher." });
        }

        console.log(`Teacher Found: ${teacherData.name}`);
        console.log(`Feedback data found: ${feedbackData.length} records`);

        const buffer = await generateFeedbackDocx(feedbackData, teacherData.name);

        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
        res.setHeader("Content-Disposition", `attachment; filename="${teacherData.name}_feedback.docx"`);
        res.send(buffer);

        console.log("DOCX file sent successfully!");
    } catch (error) {
        console.error("Error generating DOCX:", error);
        res.status(500).json({ error: "Failed to generate DOCX." });
    }
}
