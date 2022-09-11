import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Passwords must be at least 6 characters long"],
        select: false,
    },
    attempts: [{
        subject: {
            subjectName: {
                type: String,
            },
            marks: {
                type: String,
            },
            remarks: {
                type: String,
            },
        },
        default: {}
    }]

})


export const User = mongoose.model("User", userSchema)