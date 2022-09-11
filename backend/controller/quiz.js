import { Subject } from "../models/subject.js";

export const createQuestion = async(req, res) => {
    try {

        const newQuiz = {
            subject: req.body.subject,
            question: req.body.question,
            options: req.body.options
        }

        const sub = await Subject.findOne({ subject: newQuiz.subject });
        if (sub) {
            await sub.questions.push({ question: newQuiz.question, answer: [newQuiz.options.option1, newQuiz.options.option2, newQuiz.options.option3, newQuiz.options.option4] });
            await sub.save();
        } else {
            const newSubject = await Subject.create({ subject: req.body.subject });
            if (newQuiz.question !== null && newQuiz.options !== null) {
                await newSubject.questions.push({ question: newQuiz.question, answer: [newQuiz.options.option1, newQuiz.options.option2, newQuiz.options.option3, newQuiz.options.option4] });
                await newSubject.save();
            }
        }

        res.status(200).json({
            success: true,
            message: "Question added successfully",
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


export const getAllSubject = async(req, res) => {
    try {

        const subjects = await Subject.find();
        res.status(200).json({
            success: true,
            subjects
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getASubject = async(req, res) => {
    try {
        const data_sample = [];
        const quizData = await Subject.findById(req.params.id);

        quizData && quizData.questions.map(item => {
            data_sample.push(item);
        })

        return res.status(200).json({
            success: true,
            data_sample
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}