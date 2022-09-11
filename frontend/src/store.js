import { configureStore } from "@reduxjs/toolkit";
import { allSubjectReducer, createQuizReducer, subjectQuizReducer } from "./reducer";

export const store = configureStore({
    reducer: {
        allSubjects: allSubjectReducer,
        subjectQuiz: subjectQuizReducer,
        createQuiz: createQuizReducer
    }
});