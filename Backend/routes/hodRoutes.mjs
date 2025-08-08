import express from "express";
import authMiddleware from "../middlewares/authMiddleware.mjs";
import Feedback from "../models/Feedback.mjs";
import Teacher from "../models/Teacher.mjs";

const router = express.Router();

router.get("/teachers", authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== "hod") {
      return res.status(403).json({ message: "Access denied: Only HODs can access this" });
    }

    const teachers = await Teacher.find({}, "name _id");
    res.status(200).json({ teachers });
  } catch (error) {
    console.error("Error fetching teachers:", error);
    res.status(500).json({ message: "Server Error" });
  }
});


router.get("/feedback/:teacherId", authMiddleware, async (req, res) => {
  try {
    const { teacherId } = req.params;

    if (req.user.role !== "hod") {
      return res.status(403).json({ message: "Access denied: Only HODs can access this" });
    }

    const feedbackData = await Feedback.find({ teacher: teacherId })
      .populate("class", "name")
      .populate("responses.question", "question");

    if (!feedbackData.length) {
      return res.status(404).json({ message: "No feedback available for this teacher" });
    }


    const classReports = {};
    const overallStats = { totalWeight: 0, totalResponses: 0 };

    feedbackData.forEach((feedback) => {
      const className = feedback.class?.name || "Unknown Class";

      if (!classReports[className]) {
        classReports[className] = {};
      }

      feedback.responses.forEach((response) => {
        const questionText = response.question?.question || "Unknown Question";
        const selectedOption = response.selected_option; 
        const weight = response.weight || 0;

        if (!classReports[className][questionText]) {
          classReports[className][questionText] = { A: 0, B: 0, C: 0, D: 0, totalWeight: 0, totalResponses: 0 };
        }

        if (["A", "B", "C", "D"].includes(selectedOption)) {
          classReports[className][questionText][selectedOption] += 1;
        }

        classReports[className][questionText].totalWeight += weight;
        classReports[className][questionText].totalResponses += 1;

        overallStats.totalWeight += weight;
        overallStats.totalResponses += 1;
      });
    });

    const formattedReports = {};

    Object.entries(classReports).forEach(([className, questions]) => {
      const formattedData = [];

      Object.entries(questions).forEach(([question, data]) => {
        const averageScore = data.totalResponses > 0 ? (data.totalWeight / data.totalResponses).toFixed(2) : "N/A";

        formattedData.push({
          teacher: teacherId,
          class: className,
          question,
          optionA: data.A,
          optionB: data.B,
          optionC: data.C,
          optionD: data.D,
          averageScore,
        });
      });

      formattedReports[className] = formattedData;
    });

    const overallAverage = overallStats.totalResponses > 0
      ? (overallStats.totalWeight / overallStats.totalResponses).toFixed(2)
      : "N/A";

    formattedReports["Overall"] = [
      {
        teacher: teacherId,
        class: "Overall",
        question: "Average Score",
        optionA: "-",
        optionB: "-",
        optionC: "-",
        optionD: "-",
        averageScore: overallAverage,
      },
    ];

    res.status(200).json({ feedbackReports: formattedReports });
  } catch (error) {
    console.error("Error fetching HOD dashboard data:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
