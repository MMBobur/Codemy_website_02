import React, { useState } from "react";
import './style.css'
import Form from './form'

const StaffsAdd = () => {
  const [inputText, setInputText]=useState("")
  const [todos, setTodos]=useState([])
  return (
    <div className="bir">
      <h1>Eds {inputText}</h1>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText}/>
    </div>
    );
};

export default StaffsAdd;
