import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getASubject } from '../actions';
import { useParams } from 'react-router-dom';
import './Quiz.css'
import { useState } from 'react';
import { Loading } from './Loading';

const Quiz = () => {

  const { data, loading } = useSelector((state) => state.subjectQuiz);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getASubject(params.id));
  }, [dispatch, params.id])

  const [checkedValue, setCheckedValue] = useState("");


  const [index, setIndex] = useState(Number(0));
  const [score, setScore] = useState(Number(0));
  const [total,setTotal] = useState(0);

  const nextQuestionHandler = () => {
    if (index < data.length) {
      setIndex(index + 1);
     setTotal(total+score);
      setCheckedValue("");
      setScore(0);
    }

  }




  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setCheckedValue(target.name);
      setScore(Number(target.value));
    }
  }





  return <>
    {
      loading ? (<Loading/>) : (<div className="mainPage">
        <div className="QuizBlock">
          {
            data && (data.length > index) ? (<>
              <div className="questionBlock">
                {data && <h1>{data[index].question}</h1>}
              </div>
              <div className="answerBlock">
                <form action="">
                  {
                    data && data[index].answer.map(element => (
                      <h2><input
                        type="radio"
                        value={element.marks}
                        name={element.answer}
                        checked={checkedValue === element.answer}
                        onChange={handleChange}
                      />  {element.answer}</h2>
                    ))
                  }
                </form>
              </div>
              <button onClick={nextQuestionHandler}>Next</button>
            </>) : (<>
              <div className="complete">
              <h1>Quiz Completed</h1>
              </div>
           <div className="message">
           <h1>You Scored : {total} / {index}</h1>
           <h3>Remarks : {
            (total/index)>=0.8 ? "Get a life!" : (total/index)>0.6 ? "That is quite impressive!" : "You need to study more!"
            }</h3>
           </div>
            </>
            )
          }
        </div>
      </div>)}
  </>
}

export default Quiz