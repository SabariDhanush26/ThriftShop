import { mongoose } from "mongoose";
const todoSchema = new mongoose.Schema(
    {
        Title: String,
        Content: { type: String, required: true },
        complete: { type: Boolean, default: false },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
