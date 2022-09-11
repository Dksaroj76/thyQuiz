import { createReducer } from '@reduxjs/toolkit'
const initialState = {}

export const allSubjectReducer = createReducer(initialState, {
    allSubjectRequest: (state, action) => {
        state.loading = true;
    },
    allSubjectSuccess: (state, action) => {
        state.loading = false;
        state.subjects = action.payload;
    },
    allSubjectFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.error = null;
    }
})

export const subjectQuizReducer = createReducer(initialState, {
    allQuestionRequest: (state, action) => {
        state.loading = true;
    },
    allQuestionSuccess: (state, action) => {
        state.loading = false;
        state.data = action.payload;
    },
    allQuestionFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.error = null;
    }
})

export const createQuizReducer = createReducer(initialState, {
    createQuizRequest: (state, action) => {
        state.loading = true;
    },
    createQuizSuccess: (state, action) => {
        state.loading = false;
        state.data = action.payload;
    },
    createQuizFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.error = null;
    }

})