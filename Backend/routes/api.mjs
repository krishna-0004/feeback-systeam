import express from "express";
import User from "../models/User.mjs";
import Teacher from "../models/Teacher.mjs";
import Class from "../models/Class.mjs";
import Question from "../models/Question.mjs";

import users from "../data/User.mjs";
import teachers from "../data/Teacher.mjs";
import classes from "../data/Class.mjs";
import questions from "../data/Question.mjs";
import generateClassData from "../data/Class.mjs"; 

const router = express.Router();


router.post("/add/users", async (req, res) => {
    try {
        const invalidUsers = users.filter(user => user.role === "student" && !user.class);
        if (invalidUsers.length > 0) {
            return res.status(400).json({ message: "Some students are missing class", invalidUsers });
        }

        await User.deleteMany(); 
        const createdUsers = await User.insertMany(users);
        res.status(201).json({ message: "Users added successfully", users: createdUsers });
    } catch (error) {
        console.error("Error inserting users:", error);
        res.status(500).json({ message: "Server Error", error });
    }
});


router.post("/add/teachers", async (req, res) => {
    try {
        await Teacher.deleteMany(); 
        const createdTeachers = await Teacher.insertMany(teachers);
        res.status(201).json({ message: "Teachers added successfully", teachers: createdTeachers });
    } catch (error) {
        console.error("Error inserting teachers:", error);
        res.status(500).json({ message: "Server Error", error });
    }
});


router.post("/add/classes", async (req, res) => {
    try {
        await Class.deleteMany(); // Clear existing classes
        const newClasses = await generateClassData(); // Generate new class data

        if (!newClasses.length) {
            return res.status(400).json({ message: "No class data generated" });
        }

        const createdClasses = await Class.insertMany(newClasses); // Insert new classes

        res.status(201).json({ message: "Classes added successfully", classes: createdClasses });
    } catch (error) {
        console.error("Error inserting classes:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});



router.post("/add/questions", async (req, res) => {
    try {
        if (!Array.isArray(questions) || questions.length === 0) {
            return res.status(400).json({ message: "Invalid request: No questions provided" });
        }

        let insertedQuestions = [];

        for (const q of questions) {
            const { question, options } = q;

            if (!options || !Array.isArray(options) || options.length !== 4) {
                return res.status(400).json({ message: `Invalid options for question: ${question}` });
            }

            const updatedQuestion = await Question.findOneAndUpdate(
                { question }, 
                { $set: { options } }, 
                { upsert: true, new: true }
            );

            insertedQuestions.push(updatedQuestion);
        }

        res.status(201).json({ message: "Questions added/updated successfully", questions: insertedQuestions });
    } catch (error) {
        console.error("Error inserting/updating questions:", error);
        res.status(500).json({ message: "Server Error", error });
    }
});

export default router;
