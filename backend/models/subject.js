import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    subject: {
        type: String,
    },

    questions: [{
        question: {
            type: String,
        },
        answer: []
    }]

});

export const Subject = mongoose.model("Subject", subjectSchema)