import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    prn: { type: String, required: true },
    pass: { type: String, required: true },
    role: { type: String, enum: ["student", "hod"], required: true },
    class: { type: String, required: function () { return this.role === "student"; } }, // Required only for students
    attendance: { type: Number, min: 0, max: 100 }
});

export default mongoose.model("User", UserSchema);
