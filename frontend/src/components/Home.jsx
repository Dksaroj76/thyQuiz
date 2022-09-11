import React from 'react'
import './Home.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getAllSubjects } from '../actions';
import SubjectCard from './SubjectCard';
import { Loading } from './Loading';

const Home = () => {

  const { loading, subjects } = useSelector((state) => state.allSubjects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSubjects());
  }, [dispatch])


  return <>{
    loading?(<Loading/>):(<div className="home">
    <div className="center">
      <h1>Choose your Subject!</h1>
      <div className="subjectCardContainer">
        {subjects && subjects.map((element) => (
          <SubjectCard subject={element.subject} id={element._id} key={element._id} />
        ))}
      </div>
    </div>
  </div>)
  }
  </>
}

export default Home