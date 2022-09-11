import express from 'express';
import Quiz from './routes/quiz.js';
import path from 'path';
export const app = express();

app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));



app.use('/api/v1', Quiz)

app.use(express.static(path.resolve(" ./frontend/build")));
app.use(express.static(path.resolve("./frontend/build")));


// app.get('/*', function(req, res) {
//     res.sendFile(path.resolve("./frontend/build/index.html"));
// });