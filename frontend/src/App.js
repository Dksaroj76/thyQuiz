import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Quiz from './components/Quiz'
import { CreateQuiz } from './components/CreateQuiz'
import { About } from './components/About'

const App = () => {
  return <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/create" element={<CreateQuiz />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App