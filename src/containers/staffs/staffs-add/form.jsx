import React, { useState } from "react";
import './style.css'
import {Link} from 'react-router-dom'

const form = ({setInputText, todo, setTodos}) => {


  const inputTextHandle=(e)=>{
    console.log(e.target.value);
    setInputText(e.target.value)
  };
  return (
    <div className="bir">
      <div className="staffs">
        <h4>Staffs qo'shish</h4>
        <div>
          <label className="uch">Name</label>
          <br />
          <input onChange={inputTextHandle} type="text" className="ikki" placeholder="Name..."/>
        </div>
        <div>
          <label className="uch">Surname</label>
          <br />
          <input type="text" className="ikki" placeholder="Surname..."/>
        </div>
        <div>
          <label className="uch">Email</label>
          <br />
          <input type="email" className="ikki" placeholder="Email..."/>
        </div>
        <div>
          <label className="uch">Experience</label>
          <br />
          <input type="text" className="ikki" placeholder="Experience..."/>
        </div>
        <div>
          <label className="uch">Rasm yuklash</label>
          <br />
          <input type="file" />
        </div>
        <button className="olti" type="submit" >Submit</button>
        <Link to='/staffs' className="yetti">Cancel</Link>
      </div>
    </div>
    );
};

export default form;
