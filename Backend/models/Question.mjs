import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true, unique: true }, 
    options: [
      {
        text: { type: String, required: true },
        weight: { type: Number, required: true, min: 1, max: 10 } 
      }
    ]
  },
  { timestamps: true } 
);

// ❌ Remove this duplicate index
// QuestionSchema.index({ question: 1 });

export default mongoose.model("Question", QuestionSchema);
