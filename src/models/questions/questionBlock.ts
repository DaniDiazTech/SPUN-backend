import mongoose, { Schema, model } from "mongoose";

const subjectSchema = new Schema(
    {
        title: String,
    },
    {
        timestamps: true,
    }
)

const questionBlockSchema = new Schema({
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
        required: true,
    },
    questions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        required: true,
    }
    ],
    content: {
        type: String,
        required: false,
    },
    image:{
        type: String,
        required: false,
    }
},
{
    timestamps: true,
}
)

const questionBlockModel = model("QuestionBlock", questionBlockSchema);
const subjectModel = model("Subject", subjectSchema);

module.exports = {
    questionBlockModel,
    subjectModel,
};