import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import Toggle from "./components/Toggle";
import { Route, Routes } from "react-router-dom";



function App() {

  return (
    <div>
      <div>
        {/* <QuestionBox/> */}
        {/* <Toggle/> */}
        <Routes>
          <Route path="/" element={<QuestionBox/>}/>
          <Route path="result/:score" element={<Result/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;