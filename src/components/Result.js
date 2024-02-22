import React, { useState } from 'react';
import { Route, Routes, useNavigate, useParams, Link } from 'react-router-dom';
import '../index.css';
import QuestionBox from './QuestionBox';
import Toggle2 from './Toggle2';
import Images from './ImageComponent';
export const ToggleThemes = React.createContext();

export default function Result() {
  const [state, setState] = useState(true);//initial value 0
  const { score } = useParams(); //Geting parameter(score) to variable score..
  // const navigate = useNavigate();
  console.log(score)
  const handleToggle = () => {
    setState(state => !state);//if state false
  }
  return (
    <div>
      <img className="logos" src={Images.Iq} alt="Iq image" />
      <div className='resultBtn'>
        <h3>Mode:</h3>
        <ToggleThemes.Provider value={state}>
            <button className='toggle' onClick={handleToggle}>
              {state ? 'Light' : 'Dark'} {/* ternary operator */}
            </button>
            <Toggle2/>
          </ToggleThemes.Provider>
      </div>
      <div className='resultCon'>
      <div className='contentR'>
      <h1>Result: {score}</h1>
      <br/>
      <h3>You answered {score} out of 5 questions correctly - {score * 20}%</h3>
      <br/>
      <Link to="/">
        <button className="btn">Retake</button>
      </Link>
      </div>
    </div>
    </div>
    
  );
}
