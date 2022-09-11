import express from 'express'
import { createQuestion, getAllSubject, getASubject } from '../controller/quiz.js'
const Router = express.Router();

Router.route('/create/question').post(createQuestion);
Router.route('/all/subjects').get(getAllSubject);
Router.route('/quiz/:id').get(getASubject);

export default Router;