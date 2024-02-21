import React, { useState } from 'react';
import Images from './ImageComponent';
import "../index.css"
import Toggle from './Toggle';
import questions from '../questions';
import { BrowserRouter,Route,Routes, useNavigate } from 'react-router-dom';
import Result from './Result';
export const ToggleTheme = React.createContext();

export default function QuestionBox() {
  const [state, setState] = useState(true);
  const [count, setCount] = useState(0);
  const [highlighted, setHighlighted] = useState(false); 
  const [ans,Setans]=useState(0);
  const nav=useNavigate()
  function Next(option) {
    if(count>=4){
    setCount(count+1);
     nav(`result/${ans}`)
    }
    else{
      setCount((val) => val + 1);
    }
    if (option.isCorrect===true){
      Setans((val)=>val+1);
    }}
   console.log(ans)
  const handleToggle = () => {
    setState(state => !state);
  }

  const handleHighlight = () => {
    setHighlighted(true);
  };

  const handleRemoveHighlight = () => {
    setHighlighted(false);
  };


  return (
    <div className='Container'>
      <div className='top'>
        <img className="logo" src={Images.Iq} alt="Iq image" />
        <div className='mode'>
          <h3>Mode:</h3>
          <ToggleTheme.Provider value={state}>
            <button className='toggle' onClick={handleToggle}>
              {state ? 'Light' : 'Dark'}
            </button>
            <Toggle />
          </ToggleTheme.Provider>
        </div>
      </div>
      <div>
        <img className="Bg" src={Images.Bg} />
        <div className='flexs'>
          <h3>Q.no {count+1}</h3>
          <h1>Questions</h1>
        </div>
        <div className='question'>
          <div className='textdiv'>
            <div className='text'>
              <h2 className='head2' style={{ color: highlighted ? 'red' : 'inherit' }}>{questions[count].text}</h2>
            </div>
          </div>
          <div className='optiondiv'>
            <div className='list'>
            {questions[count].options.map((option) => (
            <div className='grids' key={option.id}>
            <label onClick={() => Next(option)}><h4 className='text2'>{option.text}</h4></label>
            </div>
            ))}
            </div>
          </div>
        </div>
        <div className="buttons">
          <button onClick={handleHighlight}>HeighLights</button>
          <button onClick={handleRemoveHighlight}>Remove HeighLights</button>
        </div>
      </div>
    </div>
  );
}
