import axios from "axios";

export const getAllSubjects = () => async(dispatch) => {
    try {
        dispatch({ type: "allSubjectRequest" });
        const { data } = await axios.get("/api/v1/all/subjects");
        dispatch({ type: "allSubjectSuccess", payload: data.subjects });
    } catch (error) {
        dispatch({ type: "allSubjectError", payload: error.response.data.message });
    }
}

export const getASubject = (id) => async(dispatch) => {
    try {
        dispatch({ type: "allQuestionRequest" });
        const { data } = await axios.get(`/api/v1/quiz/${id}`);
        dispatch({ type: "allQuestionSuccess", payload: data.data_sample });
    } catch (error) {
        dispatch({ type: "allQuestionFailure", payload: error.response.data.message });
    }
}

export const createAQuiz = ({ subject, question, options }) => async(dispatch) => {
    try {
        dispatch({ type: "createQuizRequest" });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.post("/api/v1/create/question", { subject, question, options }, config);
        dispatch({ type: "createQuizSuccess", payload: data });
    } catch (error) {
        dispatch({ type: "createQuizFailure", payload: error.response.data.message });
    }
}