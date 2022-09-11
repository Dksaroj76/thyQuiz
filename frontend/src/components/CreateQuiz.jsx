import React from 'react'
import './CreateQuiz.css'
import { useSelector, useDispatch } from 'react-redux'
import { Loading } from './Loading';
import { useState } from 'react';
import { createAQuiz } from '../actions';

export const CreateQuiz = () => {
    const { loading, error } = useSelector(state => state.createQuiz);
    const dispatch = useDispatch();

    const [question, setQuestion] = useState("");
    const [subject, setSubject] = useState("");
    const [options, setOptions] = useState({
        optiona: "",
        optionb: "",
        optionc: "",
        optiond: ""
    });
    const [correctAnswer, setCorrectAnswer] = useState("");
    const { optiona, optionb, optionc, optiond } = options;

    const optionHandler = (e) => {
        setOptions({ ...options, [e.target.name]: e.target.value })
    }

    const createQuiz = () => {
        dispatch(createAQuiz({
            subject,
            question,
            options: {
                option1: {
                    answer: optiona,
                    marks: (correctAnswer === optiona) ? 1 : 0
                },
                option2: {
                    answer: optionb,
                    marks: (correctAnswer === optionb) ? 1 : 0
                },
                option3: {
                    answer: optionc,
                    marks: (correctAnswer === optionc) ? 1 : 0
                },
                option4: {
                    answer: optiond,
                    marks: (correctAnswer === optiond) ? 1 : 0
                },
            }
        }))
        if (error) alert(error);
        else alert("Quiz created successfully");
    }


    return <>
        {
            loading ? (<Loading />) : (<>
                <div className='createQuiz'>
                    <form className='quizDataInput' onSubmit={createQuiz}>
                        <input type="text" value={subject} name={subject} required="true" placeholder="Subject Name" onChange={(e) => setSubject(e.target.value)} />
                        <input type="text" value={question} name={question}  required="true" placeholder="What is the Question?" onChange={(e) => setQuestion(e.target.value)} />
                        <div className='optionValues'>
                            <div className="one">
                                <input type="text" value={optiona} name="optiona"  required="true" placeholder="Option 1" onChange={optionHandler} />
                                <input type="text" value={optionb} name="optionb"  required="true" placeholder="Option 2" onChange={optionHandler} />
                            </div>
                            <div className="two">
                                <input type="text" value={optionc} name="optionc"  required="true" placeholder="Option 3" onChange={optionHandler} />
                                <input type="text" value={optiond} name="optiond"  required="true" placeholder="Option 4" onChange={optionHandler} />
                            </div>
                        </div>
                        <div className="correct">
                            <input type="text" name="correctAnswer" value={correctAnswer}  required="true" placeholder="Correct Answer" onChange={(e) => setCorrectAnswer(e.target.value)} />
                        </div>
                        <input type="submit" className='submitButton' value="Create Quiz" />
                    </form>
                </div>
            </>)
        }
    </>
}
