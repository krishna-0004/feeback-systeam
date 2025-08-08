import express from "express";
import User from "../models/User.mjs";
import Class from "../models/Class.mjs";
import authMiddleware from "../middlewares/authMiddleware.mjs";
import Question from "../models/Question.mjs";
import Feedback from "../models/Feedback.mjs";

const router = express.Router();

router.get("/teachers", authMiddleware, async (req, res) => {
    try {
        const student = await User.findById(req.user.id).select("name class role attendance");

        if (!student || student.role !== "student") {
            return res.status(403).json({ message: "Access denied: Only students can access this" });
        }

        const studentClass = await Class.findOne({ name: student.class }).populate("teachers.teacher", "name");

        if (!studentClass) {
            return res.status(404).json({ message: "Class not found" });
        }

        res.status(200).json({
            name: student.name,     
            year_class: student.class, 
            attendance: student.attendance, 
            teachers: studentClass.teachers,
        });
    } catch (error) {
        console.error("Error fetching student details:", error);
        res.status(500).json({ message: "Server Error" });
    }
});

router.get("/question/:index", authMiddleware, async (req, res) => {
    try {
        const index = parseInt(req.params.index);

        const totalQuestions = await Question.countDocuments();

        if (isNaN(index) || index < 0 || index >= totalQuestions) {
            return res.status(400).json({ message: "Invalid question index" });
        }

        const question = await Question.findOne().sort({ createdAt: 1 }).skip(index);
        
        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }

        res.status(200).json({ question, total: totalQuestions });
    } catch (error) {
        console.error("Error fetching question:", error);
        res.status(500).json({ message: "Server Error" });
    }
});


router.post("/submit", authMiddleware, async (req, res) => {
    try {
        console.log("Received feedback submission:", req.body);

        const { teacherId, questionId, selected_option, option_label, weight } = req.body;

        if (!teacherId || !questionId || !selected_option) {
            console.error("Missing required fields:", { teacherId, questionId, selected_option });
            return res.status(400).json({ message: "Missing required fields" });
        }

        const studentId = req.user.id;

        const student = await User.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        const studentClass = await Class.findOne({ name: student.class });
        if (!studentClass) {
            return res.status(404).json({ message: "Class not found" });
        }

        const question = await Question.findById(questionId);
        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }

        if (!["A", "B", "C", "D"].includes(selected_option)) {
            console.error("Invalid selected option:", selected_option);
            return res.status(400).json({ message: "Invalid selected option" });
        }

        let feedback = await Feedback.findOne({ student: studentId, teacher: teacherId });

        if (!feedback) {
            feedback = new Feedback({
                student: studentId,
                teacher: teacherId,
                class: studentClass._id, 
                responses: [],
            });
        }

        if (feedback.responses.some((resp) => resp.question.toString() === questionId)) {
            return res.status(400).json({ message: "You have already submitted an answer for this question" });
        }

        feedback.responses.push({
            question: questionId,
            selected_option,
            option_label,
            weight,
        });

        await feedback.save();
        res.status(201).json({ message: "Answer submitted successfully" });

    } catch (error) {
        console.error("Error submitting feedback:", error);
        res.status(500).json({ message: "Server Error" });
    }
});


export default router;
