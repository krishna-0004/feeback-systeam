import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    teachers: [
      {
        teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher", required: true },
      }
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Class", ClassSchema);