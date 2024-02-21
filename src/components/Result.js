import React, { useState } from 'react';
import { Route, Routes, useNavigate, useParams, Link } from 'react-router-dom';
import '../index.css';
import QuestionBox from './QuestionBox';

export default function Result() {
  const { score } = useParams();
  const navigate = useNavigate();
  console.log(score)
  const [mes,Setmes]=useState("Try next time")
  if({score}>=3){
    Setmes("Good Job");
  }
  console.log(mes)
  return (
    <div className='resultCon'>
      <div className='contentR'>
      <h1>Result: {score}</h1>
      <br/>
      <h2>{mes}</h2>
      <h3>You answered {score} out of 5 questions correctly</h3>
      <br/>
      <Link to="/">
        <button className="btn">Retake</button>
      </Link>
      </div>
    </div>
  );
}
