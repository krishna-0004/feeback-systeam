import { Document, Packer, Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, BorderStyle } from "docx";
import QuestionModel from "../models/Question.mjs"; // Import Mongoose model
import questions from "../data/Question.mjs"; // Static questions for the first table

export async function generateFeedbackDocx(feedbackData, teacherName) {
    if (!feedbackData || feedbackData.length === 0) {
        throw new Error("No feedback data available.");
    }

    // ✅ Fetch all questions dynamically for feedback processing
    const dbQuestions = await QuestionModel.find({}, "_id question optionA optionB optionC optionD").lean();
    console.log("✅ Questions loaded successfully. Total:", dbQuestions.length);

    // Convert fetched questions into a lookup object for fast searching
    const questionMap = {};
    dbQuestions.forEach(q => {
        questionMap[q._id.toString()] = q;
    });

    // ✅ Function to create a styled table row
    const createTableRow = (texts, isHeader = false) =>
        new TableRow({
            children: texts.map(text => new TableCell({
                children: [new Paragraph({ text, bold: isHeader, alignment: AlignmentType.CENTER })],
                margins: { top: 100, bottom: 100, left: 100, right: 100 }, // Add padding
                shading: isHeader ? { fill: "D9D9D9" } : undefined, // Light gray header
            })),
        });

    // ✅ Question Table (First Page)
    const questionTable = new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            createTableRow(["No.", "Question", "Option A", "Option B", "Option C", "Option D"], true),
            ...questions.map((q, index) => createTableRow([
                (index + 1).toString(),
                q?.question || "N/A",
                q?.options?.[0]?.text || "N/A",
                q?.options?.[1]?.text || "N/A",
                q?.options?.[2]?.text || "N/A",
                q?.options?.[3]?.text || "N/A",
            ])),
        ],
    });

    // ✅ Process Feedback Data Class-wise
    const classFeedback = {};
    feedbackData.forEach(entry => {
        if (!entry.class?.name) return;

        const className = entry.class.name;
        classFeedback[className] = classFeedback[className] || {};

        entry.responses.forEach(response => {
            if (!response?.question?._id) return;

            const questionId = response.question._id.toString();
            const questionText = questionMap[questionId]?.question || "Unknown Question";

            if (!classFeedback[className][questionText]) {
                classFeedback[className][questionText] = { A: 0, B: 0, C: 0, D: 0, totalWeight: 0, count: 0 };
            }

            const feedback = classFeedback[className][questionText];
            feedback[response.selected_option] += 1;
            feedback.totalWeight += response.weight;
            feedback.count += 1;
        });
    });

    // ✅ Generate Class-wise Feedback Tables
    const classTables = Object.entries(classFeedback).flatMap(([className, questions]) => [
        new Paragraph({ text: `${className} Feedback`, bold: true, size: 26, alignment: AlignmentType.CENTER }),
        new Paragraph(""), // Spacing
        new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                createTableRow(["Question", "Option A", "Option B", "Option C", "Option D", "Average Score"], true),
                ...Object.entries(questions).map(([question, data]) => {
                    const avgScore = data.count > 0 ? (data.totalWeight / data.count).toFixed(2) : "0.00";
                    return createTableRow([
                        question,
                        data.A.toString(),
                        data.B.toString(),
                        data.C.toString(),
                        data.D.toString(),
                        avgScore,
                    ]);
                }),
            ],
        }),
        new Paragraph(""), // Extra spacing
    ]);

    // ✅ Compute Class-wise Averages
    const classAverages = Object.entries(classFeedback).map(([className, questions]) => {
        const totalScores = Object.values(questions).reduce((sum, data) => sum + (data.count > 0 ? (data.totalWeight / data.count) : 0), 0);
        const avgClassScore = totalScores > 0 ? (totalScores / Object.keys(questions).length).toFixed(2) : "0.00";
        return { className, avgClassScore };
    });

    // ✅ Overall Average of Class Averages
    const overallAverage = classAverages.length > 0
        ? (classAverages.reduce((sum, obj) => sum + parseFloat(obj.avgClassScore), 0) / classAverages.length).toFixed(2)
        : "N/A";

    console.log("📊 Overall Average Score of Class Averages:", overallAverage);

    // ✅ Class-wise Averages Table
    const classAverageTable = new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            createTableRow(["Class", "Average Score"], true),
            ...classAverages.map(({ className, avgClassScore }) => createTableRow([className, avgClassScore])),
        ],
    });

    // ✅ Overall Average Table
    const overallTable = new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            createTableRow(["Overall Average Feedback", overallAverage], true),
        ],
    });

    // ✅ Space for Signature
    // ✅ Space for Signature with Proper Formatting
const signatureSpace = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: { top: { style: BorderStyle.SINGLE, size: 3 } }, // Adds a line above for separation
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph("Signature of HOD:"),
                        new Paragraph(""), // Extra spacing for signing
                        new Paragraph("________________________"), // Signature line
                        new Paragraph(""), // More spacing
                        new Paragraph({ text: "Dr. Deepika Patil Mam", bold: true, size: 24, alignment: AlignmentType.LEFT }),
                    ],
                    margins: { top: 400, bottom: 100 }, // Space for signing
                    shading: { fill: "F0F0F0" }, // Light gray background for emphasis
                }),
            ],
        }),
    ],
});


    // ✅ Final Document Structure
    const doc = new Document({
        sections: [
            {
                properties: {},
                children: [
                    new Paragraph({ text: "DEPARTMENT OF CSE", bold: true, size: 32, alignment: AlignmentType.CENTER }),
                    new Paragraph({ text: `Professor: ${teacherName}`, bold: true, size: 28, alignment: AlignmentType.CENTER }),
                    new Paragraph(""), // Spacing
                    questionTable,
                    new Paragraph(""), // Spacing
                    new Paragraph({ text: "Class-wise Feedback", bold: true, size: 28, alignment: AlignmentType.CENTER }),
                    ...classTables,
                    new Paragraph({ text: "Class-wise Averages", bold: true, size: 28, alignment: AlignmentType.CENTER }),
                    classAverageTable,
                    new Paragraph(""), // Spacing
                    overallTable,
                    new Paragraph(""), // Spacing
                    signatureSpace,
                ],
            },
        ],
    });

    return await Packer.toBuffer(doc);
}
