import React from 'react'
import './SubjectCard.css'
import { Link } from 'react-router-dom'

const SubjectCard = (props) => {
  
  return <>
    <Link className="subjectCard" to={`/quiz/${props.id}`}>
        <div className="imageSection">
         <img src={`./images/${props.subject}.jpg`} alt="" />
        </div>
        <div className="subjectNameSection">
          <h2>{props.subject}</h2>
        </div>
    </Link>
  </>
}

export default SubjectCard