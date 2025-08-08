import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher", required: true },
    class: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true }, 

    responses: [
      {
        question: { type: mongoose.Schema.Types.ObjectId, ref: "Question", required: true },
        selected_option: { type: String, required: true },
        option_label: { type: String }, 
        weight: { type: Number, required: true }
      }
    ]
  },
  { timestamps: true } 
);

FeedbackSchema.index({ student: 1, teacher: 1 }, { unique: true });

FeedbackSchema.index({ teacher: 1 });
FeedbackSchema.index({ class: 1 });
FeedbackSchema.index({ student: 1 });

export default mongoose.model("Feedback", FeedbackSchema);
